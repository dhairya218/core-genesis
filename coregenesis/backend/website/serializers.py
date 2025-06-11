from rest_framework import serializers
from .models import ContactInquiry

class ContactInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInquiry
        fields = ['id', 'full_name', 'email', 'phone', 'business_name', 'service', 'message', 'submitted_at']
        read_only_fields = ['id', 'submitted_at'] 