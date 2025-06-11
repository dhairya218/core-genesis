from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from services.views import ServiceViewSet

router = DefaultRouter()
router.register(r'services', ServiceViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
] 