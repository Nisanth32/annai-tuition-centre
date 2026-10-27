import json
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.middleware.csrf import get_token, rotate_token
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.views.decorators.http import require_GET, require_POST
from django.contrib.auth.decorators import login_required, user_passes_test

@require_GET
@ensure_csrf_cookie
def csrf(request):
    return JsonResponse({"csrfToken": get_token(request)})

@require_POST
@csrf_protect
def admin_login(request):
    try:
        body = json.loads(request.body or b"{}")
    except (json.JSONDecodeError, UnicodeDecodeError):
        return JsonResponse({"detail": "Invalid request."}, status=400)
    user = authenticate(request, username=body.get("username", ""), password=body.get("password", ""))
    if user is None or not user.is_staff or not user.is_active:
        return JsonResponse({"detail": "Invalid administrator credentials."}, status=401)
    login(request, user)
    return JsonResponse({"authenticated": True, "username": user.get_username(), "csrfToken": get_token(request)})

@require_GET
def admin_me(request):
    if not request.user.is_authenticated or not request.user.is_staff:
        return JsonResponse({"detail": "Authentication required."}, status=401)
    return JsonResponse({"authenticated": True, "username": request.user.get_username()})

@require_POST
@csrf_protect
def admin_logout(request):
    logout(request)
    rotate_token(request)
    return JsonResponse({"authenticated": False, "csrfToken": get_token(request)})
