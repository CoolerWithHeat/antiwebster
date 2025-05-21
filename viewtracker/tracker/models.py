from django.db import models

class TrackedViews(models.Model):
    LANGUAGE_CHOICES = [
        ('uz', 'Uzbek'),
        ('en', 'English'),
        ('ru', 'Russian'),
    ]

    language = models.CharField(max_length=2, choices=LANGUAGE_CHOICES)
    viewer_id = models.CharField(max_length=12)
    ip_address = models.GenericIPAddressField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"View at {self.created_at.strftime('%B %d, %Y')}"

class FakeViews(models.Model):
    LANGUAGE_CHOICES = [
        ('uz', 'Uzbek'),
        ('en', 'English'),
        ('ru', 'Russian'),
    ]

    language = models.CharField(max_length=2, choices=LANGUAGE_CHOICES)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"View at {self.created_at.strftime('%B %d, %Y')}"