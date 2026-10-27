from django.urls import path
from .views import csrf, admin_login, admin_me, admin_logout
urlpatterns = [
    path("auth/csrf/", csrf, name="csrf"),
    path("auth/login/", admin_login, name="admin-login"),
    path("auth/me/", admin_me, name="admin-me"),
    path("auth/logout/", admin_logout, name="admin-logout"),
]
