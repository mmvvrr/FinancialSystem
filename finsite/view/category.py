from rest_framework import permissions, viewsets
from rest_framework.pagination import PageNumberPagination

from finsite.serializer import CategorySerializer
from finsite.models import Category
import django_filters.rest_framework


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class CategoryViewSet(viewsets.ModelViewSet):
    pagination_class = StandardResultsSetPagination
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = [permissions.IsAuthenticated]
