from django.db import models
from django_mongodb_backend.fields import ObjectIdAutoField
from admissions.models import INDIAN_MOBILE

class ContactEnquiry(models.Model):
    id = ObjectIdAutoField(primary_key=True)
    parent_name = models.CharField(max_length=120)
    mobile = models.CharField(max_length=18, validators=[INDIAN_MOBILE])
    email = models.EmailField(blank=True, max_length=254)
    message = models.CharField(max_length=1200)
    consent = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.parent_name} · {self.created_at:%Y-%m-%d}"
