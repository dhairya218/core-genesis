from django.contrib import admin
from .models import Service
from .forms import ServiceAdminForm

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    form = ServiceAdminForm
    list_display = ('title', 'icon_name', 'is_active', 'created_at', 'updated_at')
    list_filter = ('is_active', 'created_at', 'updated_at')
    search_fields = ('title', 'description')
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'description', 'icon_name', 'is_active')
        }),
        ('Service Details', {
            'fields': ('points_text',),
            'description': 'Enter each point on a new line'
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    def save_model(self, request, obj, form, change):
        # Convert points from textarea to JSON if it's a string
        if isinstance(obj.points, str):
            obj.points = [point.strip() for point in obj.points.split('\n') if point.strip()]
        super().save_model(request, obj, form, change) 