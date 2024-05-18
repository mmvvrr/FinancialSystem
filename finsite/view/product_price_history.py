from rest_framework import permissions, viewsets
from finsite.serializer import ProductPriceHistorySerializer
from finsite.models import ProductPriceHistory
import django_filters.rest_framework


class ProductPriceHistoryLineViewSet(viewsets.ModelViewSet):
    queryset = ProductPriceHistory.objects.all()
    serializer_class = ProductPriceHistorySerializer
    #permission_classes = [permissions.IsAuthenticated]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]