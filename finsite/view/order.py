from rest_framework import permissions, viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from finsite.serializer import OrderSerializer
from finsite.models import Order
import django_filters.rest_framework

from finsite.service.analytics.order_by_year import order_by_year


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    #permission_classes = [permissions.IsAuthenticated]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['status', 'created_at']


    @action(detail=False, methods=['get'], url_path='analytics/order_by_year')
    def order_by_year(self, request, pk=None, *args, **kwargs):
        return Response(
            {"order_by_year": order_by_year()},
            status=status.HTTP_200_OK
        )