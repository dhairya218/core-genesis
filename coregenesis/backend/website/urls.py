from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContactInquiryViewSet

router = DefaultRouter()
router.register(r'contact', ContactInquiryViewSet)
# router.register(r'stories', SuccessStoryViewSet, basename='stories')

urlpatterns = [
    path('api/', include(router.urls)),
]
