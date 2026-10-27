from django.contrib import admin
from .models import Admission

@admin.register(Admission)
class AdmissionAdmin(admin.ModelAdmin):
    list_display = ("reference", "student_name", "parent_name", "parent_mobile", "applying_class", "branch", "status", "created_at")
    list_filter = ("status", "applying_class", "branch", "created_at")
    search_fields = ("reference", "student_name", "parent_name", "parent_mobile")
    readonly_fields = ("reference", "created_at", "updated_at")
    list_per_page = 25
