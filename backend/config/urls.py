from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("admissions.urls")),
    path("api/", include("contact.urls")),
    path("api/", include("courses.urls")),
    path("api/", include("accounts.urls")),
]
