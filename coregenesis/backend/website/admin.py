from django.contrib import admin
from .models import ContactInquiry, SuccessStory

@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'phone', 'business_name', 'service', 'submitted_at')
    list_filter = ('service', 'submitted_at')
    search_fields = ('full_name', 'email', 'business_name')
    readonly_fields = ('submitted_at',)

@admin.register(SuccessStory)
class SuccessStoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'business_name', 'business_type', 'created_at')
    list_filter = ('business_type', 'created_at')
    search_fields = ('title', 'business_name')
    readonly_fields = ('created_at',)
