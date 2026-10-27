import re
from rest_framework import serializers
from .models import Admission, BRANCHES, CLASSES

def clean_mobile(value):
    value = re.sub(r"[\s()-]", "", value or "")
    if value.startswith("+91"):
        value = value[3:]
    elif value.startswith("91") and len(value) == 12:
        value = value[2:]
    if value and not re.fullmatch(r"[6-9]\d{9}", value):
        raise serializers.ValidationError("Enter a valid Indian mobile number.")
    return value

class AdmissionCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admission
        fields = ("student_name", "parent_name", "parent_mobile", "alternative_mobile", "email", "current_class", "applying_class", "school_name", "branch", "subjects", "preferred_contact", "message", "consent")

    def validate_student_name(self, v): return v.strip()
    def validate_parent_name(self, v): return v.strip()
    def validate_parent_mobile(self, v): return clean_mobile(v)
    def validate_alternative_mobile(self, v): return clean_mobile(v)
    def validate_email(self, v): return v.strip().lower()
    def validate_school_name(self, v): return v.strip()
    def validate_subjects(self, v): return v.strip()
    def validate_message(self, v): return v.strip()
    def validate_consent(self, v):
        if not v: raise serializers.ValidationError("Consent is required before we can contact you.")
        return v

class AdmissionAdminSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source="pk", read_only=True)
    class Meta:
        model = Admission
        fields = "__all__"
        read_only_fields = ("id", "reference", "created_at", "updated_at")

class StatusSerializer(serializers.Serializer):
    status = serializers.ChoiceField(choices=Admission.Status.choices)
