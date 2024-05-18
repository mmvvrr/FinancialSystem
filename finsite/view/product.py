from rest_framework import permissions, viewsets
from finsite.serializer import ProductSerializer
from finsite.models import *
import django_filters.rest_framework

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    #permission_classes = [permissions.IsAuthenticated]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'name']