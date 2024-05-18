from rest_framework import permissions, viewsets
from finsite.serializer import OrderSerializer
from finsite.models import Order
import django_filters.rest_framework


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    #permission_classes = [permissions.IsAuthenticated]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['status', 'created_at']
