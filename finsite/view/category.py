from rest_framework import permissions, viewsets
from finsite.serializer import CategorySerializer
from finsite.models import Category
import django_filters.rest_framework

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = [permissions.IsAuthenticated]