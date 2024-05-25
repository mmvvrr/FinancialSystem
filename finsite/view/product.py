from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from finsite.serializer import ProductSerializer
from finsite.models import *
import django_filters.rest_framework
from django.db.models import Prefetch

from finsite.service.analytics.product_prices_by_category import product_prices_by_category
from finsite.service.analytics.product_price_history import product_price_history
from finsite.service.analytics.product_orders import product_orders
from finsite.service.analytics.products_by_year import products_by_year
from finsite.service.analytics.products_top import products_top
from finsite.service.analytics.product import *


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
    def product_prices_by_category(self, request, pk=None, *args, **kwargs):
        return Response(
            {"products": product_prices_by_category(request.GET.get('category'))},
            status=status.HTTP_200_OK
        )

    @action(detail=False, methods=['get'], url_path='analytics/product_orders')
    def product_orders(self, request, pk=None, *args, **kwargs):
        return Response(
            {"products": product_orders(request.GET.get('product'), to_date=request.GET.get('to_date'),
                                        from_date=request.GET.get('from_date'))},
            status=status.HTTP_200_OK
        )

    @action(detail=True, methods=['get'], url_path='analytics/product_prices_history')
    def product_prices_history(self, request, *args, **kwargs):
        price_history = product_price_history(
            kwargs['pk'],
            to_date=request.GET.get('to_date'),
            from_date=request.GET.get('from_date')
        )
        return Response(
            {"product_price_history": price_history},
            status=status.HTTP_200_OK
        )

    @action(detail=False, methods=['get'], url_path='analytics/products_by_year')
    def products_by_year(self, request, pk=None, *args, **kwargs):
        return Response(
            {"products_by_year": products_by_year(request.GET.get('year', '2023'),
                                                  category=request.GET.get('category', '0'), )},
            status=status.HTTP_200_OK
        )

    @action(detail=False, methods=['get'], url_path='analytics/products_top')
    def products_top(self, request, pk=None, *args, **kwargs):
        print(request.query_params.getlist('years', ''))
        return Response(
            {"products_top": products_top(count=request.GET.get('count', 10),
                                          category=request.query_params.getlist('category[]'))},
            status=status.HTTP_200_OK
        )


    @action(detail=True, methods=['get'], url_path='analytics/product_data_sales')
    def product_data_sales(self, request, *args, **kwargs):

        product = kwargs['pk']
        to_date = request.GET.get('to_date')
        from_date = request.GET.get('from_date')

        return Response(
            {"product_data_sales": product_data_sales(
                product,
                to_date=to_date,
                from_date=from_date
            )},
            status=status.HTTP_200_OK
        )
