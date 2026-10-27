import logging
from django.conf import settings
from django.core.mail import send_mail
from django.db import DatabaseError
from rest_framework import generics, permissions, throttling
from rest_framework.exceptions import APIException
from rest_framework.response import Response
from rest_framework import status
from .models import ContactEnquiry
from .serializers import ContactEnquirySerializer

logger = logging.getLogger(__name__)

class ContactCreateView(generics.CreateAPIView):
    queryset = ContactEnquiry.objects.all()
    serializer_class = ContactEnquirySerializer
    permission_classes = [permissions.AllowAny]
    throttle_classes = [throttling.ScopedRateThrottle]
    throttle_scope = "contact"

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        try:
            item = serializer.save()
        except DatabaseError as exc:
            logger.error("Contact enquiry save failed: %s", type(exc).__name__)
            raise ContactDatabaseUnavailable()
        emailed = False
        if settings.CONTACT_NOTIFICATION_EMAIL and settings.DEFAULT_FROM_EMAIL and settings.EMAIL_HOST:
            try:
                send_mail("New Annai Tuition Centre contact enquiry", f"Name: {item.parent_name}\nMobile: {item.mobile}\nMessage: {item.message}", settings.DEFAULT_FROM_EMAIL, [settings.CONTACT_NOTIFICATION_EMAIL], fail_silently=False)
                emailed = True
            except Exception as exc:
                logger.warning("Contact notification failed (%s)", type(exc).__name__)
        return Response({"saved": True, "notification_sent": emailed}, status=status.HTTP_201_CREATED)

class ContactDatabaseUnavailable(APIException):
    status_code = 503
    default_detail = "The enquiry service is temporarily unavailable. Please call the centre."
    default_code = "database_unavailable"
