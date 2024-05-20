from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from finsite.serializer import ProductSerializer
from finsite.models import *
import django_filters.rest_framework
from django.db.models import Prefetch

from finsite.service.analytics.product_prices_by_category import product_prices_by_category


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.prefetch_related(
        Prefetch(
            'prices',
            queryset=ProductPriceHistory.objects.order_by('-created_at')
        )
    )

    serializer_class = ProductSerializer
    #permission_classes = [permissions.IsAuthenticated]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['id', 'name']

    @action(detail=False, methods=['get'], url_path='analytics/product_prices_by_category')
    def product_prices_by_category(self, request, *args, **kwargs):
        return Response(
            {"args": request.GET.get('category'), "products": product_prices_by_category(request.GET.get('category'))},
            status=status.HTTP_200_OK
        )