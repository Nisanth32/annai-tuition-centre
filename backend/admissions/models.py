import uuid
from django.core.validators import RegexValidator
from django.db import models
from django_mongodb_backend.fields import ObjectIdAutoField

INDIAN_MOBILE = RegexValidator(r"^(?:\+91|91)?[6-9]\d{9}$", "Enter a valid Indian mobile number.")
BRANCHES = (
    "Sivan Kovil, Opp. Puthur Manthai, Trichy-17",
    "Ramakrishna Middle School, Near Aruna Theatre, Puthur, Trichy-17",
)
CLASSES = ("Classes 1–8", "9th Standard", "10th Standard", "11th Standard", "12th Standard")

class Admission(models.Model):
    class Status(models.TextChoices):
        NEW = "New", "New"
        CONTACTED = "Contacted", "Contacted"
        VISIT_SCHEDULED = "Visit Scheduled", "Visit Scheduled"
        ADMITTED = "Admitted", "Admitted"
        REJECTED = "Rejected", "Rejected"

    id = ObjectIdAutoField(primary_key=True)
    reference = models.CharField(max_length=16, unique=True, editable=False)
    idempotency_key = models.CharField(max_length=64, unique=True, null=True, blank=True, editable=False)
    student_name = models.CharField(max_length=120)
    parent_name = models.CharField(max_length=120)
    parent_mobile = models.CharField(max_length=18, validators=[INDIAN_MOBILE])
    alternative_mobile = models.CharField(max_length=18, blank=True, validators=[INDIAN_MOBILE])
    email = models.EmailField(blank=True, max_length=254)
    current_class = models.CharField(max_length=30, choices=[(c, c) for c in CLASSES])
    applying_class = models.CharField(max_length=30, choices=[(c, c) for c in CLASSES])
    school_name = models.CharField(max_length=160, blank=True)
    branch = models.CharField(max_length=100, choices=[(b, b) for b in BRANCHES])
    subjects = models.CharField(max_length=250, blank=True)
    preferred_contact = models.CharField(max_length=12, blank=True, choices=[("Phone", "Phone"), ("WhatsApp", "WhatsApp"), ("Email", "Email")])
    message = models.CharField(max_length=1200, blank=True)
    consent = models.BooleanField(default=False)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.NEW)
    admin_notes = models.CharField(max_length=2000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.reference:
            self.reference = f"ATC-{uuid.uuid4().hex[:10].upper()}"
        super().save(*args, **kwargs)

    class Meta:
        ordering = ["-created_at"]
        indexes = [models.Index(fields=["status", "created_at"])]

    def __str__(self):
        return f"{self.reference} · {self.student_name}"
