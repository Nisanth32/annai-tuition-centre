from rest_framework import serializers
from admissions.serializers import clean_mobile
from .models import ContactEnquiry

class ContactEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactEnquiry
        fields = ("parent_name", "mobile", "email", "message", "consent")
    def validate_parent_name(self, v): return v.strip()
    def validate_mobile(self, v): return clean_mobile(v)
    def validate_email(self, v): return v.strip().lower()
    def validate_message(self, v): return v.strip()
    def validate_consent(self, v):
        if not v: raise serializers.ValidationError("Consent is required before we can contact you.")
        return v
