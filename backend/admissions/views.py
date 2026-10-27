import logging
from django.conf import settings
from django.core.mail import send_mail
from django.db import DatabaseError, IntegrityError
from rest_framework import generics, permissions, status, throttling
from rest_framework.decorators import api_view, permission_classes, throttle_classes
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from .models import Admission
from .serializers import AdmissionCreateSerializer, AdmissionAdminSerializer, StatusSerializer

logger = logging.getLogger(__name__)

class DatabaseUnavailable(APIException):
    status_code = 503
    default_detail = "The enquiry service is temporarily unavailable. Please call the centre."
    default_code = "database_unavailable"

class AdmissionCreateView(generics.CreateAPIView):
    queryset = Admission.objects.all()
    serializer_class = AdmissionCreateSerializer
    permission_classes = [permissions.AllowAny]
    throttle_classes = [throttling.ScopedRateThrottle]
    throttle_scope = "admission"

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        idempotency_key = request.headers.get("Idempotency-Key", "").strip()[:64] or None
        try:
            if idempotency_key:
                existing = Admission.objects.filter(idempotency_key=idempotency_key).first()
                if existing:
                    return Response({"reference": existing.reference, "saved": True, "notification_sent": False}, status=status.HTTP_201_CREATED)
            admission = serializer.save(idempotency_key=idempotency_key)
        except IntegrityError as exc:
            if idempotency_key:
                existing = Admission.objects.filter(idempotency_key=idempotency_key).first()
                if existing:
                    return Response({"reference": existing.reference, "saved": True, "notification_sent": False}, status=status.HTTP_201_CREATED)
            logger.error("Admission uniqueness check failed: %s", type(exc).__name__)
            raise DatabaseUnavailable()
        except DatabaseError as exc:
            logger.error("Admission save failed: %s", type(exc).__name__)
            raise DatabaseUnavailable()
        email_sent = False
        if settings.ADMISSIONS_NOTIFICATION_EMAIL and settings.DEFAULT_FROM_EMAIL and settings.EMAIL_HOST:
            try:
                send_mail(
                    subject=f"New admission enquiry {admission.reference}",
                    message=(f"Reference: {admission.reference}\nStudent: {admission.student_name}\nParent mobile: {admission.parent_mobile}\nClass applying for: {admission.applying_class}\nBranch: {admission.branch}"),
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.ADMISSIONS_NOTIFICATION_EMAIL],
                    fail_silently=False,
                )
                email_sent = True
            except Exception as exc:
                logger.warning("Admission notification failed for %s (%s)", admission.reference, type(exc).__name__)
        return Response({"reference": admission.reference, "saved": True, "notification_sent": email_sent}, status=status.HTTP_201_CREATED)

class AdmissionListView(generics.ListAPIView):
    serializer_class = AdmissionAdminSerializer
    permission_classes = [permissions.IsAdminUser]

    def get_queryset(self):
        return filtered_admissions(self.request)

def filtered_admissions(request):
        qs = Admission.objects.all()
        status_filter = request.query_params.get("status")
        query = request.query_params.get("q", "").strip()
        if status_filter in Admission.Status.values:
            qs = qs.filter(status=status_filter)
        if query:
            qs = qs.filter(student_name__icontains=query) | qs.filter(parent_name__icontains=query) | qs.filter(parent_mobile__icontains=query) | qs.filter(reference__icontains=query)
        return qs

@api_view(["GET"])
@permission_classes([permissions.IsAdminUser])
def admission_metrics(request):
    try:
        data = {"total": Admission.objects.count()}
        for key, value in Admission.Status.choices:
            data[key.lower().replace(" ", "_")] = Admission.objects.filter(status=key).count()
        return Response(data)
    except DatabaseError as exc:
        logger.error("Admission metrics failed: %s", type(exc).__name__)
        raise DatabaseUnavailable()

@api_view(["GET"])
@permission_classes([permissions.IsAdminUser])
def admission_detail(request, pk):
    try:
        item = Admission.objects.get(pk=pk)
    except Admission.DoesNotExist:
        return Response({"detail": "Not found."}, status=404)
    except DatabaseError as exc:
        logger.error("Admission lookup failed: %s", type(exc).__name__)
        raise DatabaseUnavailable()
    return Response(AdmissionAdminSerializer(item).data)

@api_view(["PATCH"])
@permission_classes([permissions.IsAdminUser])
def update_status(request, pk):
    serializer = StatusSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    try:
        item = Admission.objects.get(pk=pk)
        item.status = serializer.validated_data["status"]
        item.save(update_fields=["status", "updated_at"])
        return Response({"id": str(item.pk), "status": item.status})
    except Admission.DoesNotExist:
        return Response({"detail": "Not found."}, status=404)
    except DatabaseError as exc:
        logger.error("Admission status update failed: %s", type(exc).__name__)
        raise DatabaseUnavailable()

@api_view(["GET"])
@permission_classes([permissions.AllowAny])
def database_health(request):
    try:
        from django.db import connection
        connection.ensure_connection()
        return Response({"database": "connected"})
    except Exception as exc:
        logger.error("Database health check failed: %s", type(exc).__name__)
        return Response({"database": "unavailable"}, status=503)
