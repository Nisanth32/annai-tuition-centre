from django.urls import path
from .views import AdmissionCreateView, AdmissionListView, admission_detail, admission_metrics, update_status, database_health

urlpatterns = [
    path("health/", database_health, name="database-health"),
    path("admissions/", AdmissionCreateView.as_view(), name="admission-create"),
    path("admin/admissions/", AdmissionListView.as_view(), name="admission-list"),
    path("admin/admissions/metrics/", admission_metrics, name="admission-metrics"),
    path("admin/admissions/<str:pk>/", admission_detail, name="admission-detail"),
    path("admin/admissions/<str:pk>/status/", update_status, name="admission-status"),
]
