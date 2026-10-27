from django.contrib import admin
from .models import ContactEnquiry

@admin.register(ContactEnquiry)
class ContactEnquiryAdmin(admin.ModelAdmin):
    list_display = ("parent_name", "mobile", "email", "created_at")
    search_fields = ("parent_name", "mobile", "email")
    list_filter = ("created_at",)
    list_per_page = 25
