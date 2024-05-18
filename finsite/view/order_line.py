from rest_framework import permissions, viewsets
from finsite.serializer import OrderLineSerializer
from finsite.models import OrderLine
import django_filters.rest_framework


class OrderLineViewSet(viewsets.ModelViewSet):
    queryset = OrderLine.objects.all()
    serializer_class = OrderLineSerializer
    #permission_classes = [permissions.IsAuthenticated]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]