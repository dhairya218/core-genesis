from django.db import models

SERVICE_CHOICES = [
    ('web_development', 'Web Development'),
    ('seo', 'SEO'),
    ('marketing', 'Marketing'),
    ('consulting', 'Consulting'),
]

# Create your models here.
class ContactInquiry(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    business_name = models.CharField(max_length=100, blank=True)
    service = models.CharField(max_length=50, choices=SERVICE_CHOICES)
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

class SuccessStory(models.Model):
    title = models.CharField(max_length=200)
    business_name = models.CharField(max_length=100)
    business_type = models.CharField(max_length=100)
    description = models.TextField()
    testimonial = models.TextField()
    image = models.ImageField(upload_to='success_stories/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
