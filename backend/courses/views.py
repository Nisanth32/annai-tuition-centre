from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

@api_view(["GET"])
@permission_classes([AllowAny])
def course_list(request):
    classes = ["Classes 1–8", "9th Standard", "10th Standard", "11th Standard", "12th Standard"]
    return Response([{"name": name, "description": "Contact us for details", "subjects": [], "availability": "Contact us for details"} for name in classes])
