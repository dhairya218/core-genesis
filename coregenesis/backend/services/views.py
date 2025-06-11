from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from django.core.exceptions import ObjectDoesNotExist
from .models import Service
from .serializers import ServiceSerializer
import logging

logger = logging.getLogger(__name__)

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]  # Allow public access to services 

    def list(self, request, *args, **kwargs):
        try:
            queryset = self.get_queryset()
            serializer = self.get_serializer(queryset, many=True)
            logger.info(f"Retrieved {len(queryset)} services")
            return Response(serializer.data)
        except Exception as e:
            logger.error(f"Error retrieving services: {str(e)}")
            return Response({"error": "Failed to retrieve services"}, status=500)

    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        except ObjectDoesNotExist:
            return Response({"error": "Service not found"}, status=404)
        except Exception as e:
            logger.error(f"Error retrieving service: {str(e)}")
            return Response({"error": "Failed to retrieve service"}, status=500) 