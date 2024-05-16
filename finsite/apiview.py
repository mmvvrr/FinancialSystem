from rest_framework import permissions, viewsets
from .serializer import ProductSerializer, CategorySerializer
from .models import *
import django_filters.rest_framework

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    #permission_classes = [permissions.IsAuthenticated]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'name']


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = [permissions.IsAuthenticated]

