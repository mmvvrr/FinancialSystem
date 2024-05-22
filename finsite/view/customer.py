from rest_framework import permissions, viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from finsite.serializer import CustomerSerializer
from finsite.models import Customer
import django_filters.rest_framework
from finsite.service.analytics.customer_count import customer_count


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    #permission_classes = [permissions.IsAuthenticated]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['name', 'surname', 'patronymic', 'email', 'date_birth', 'gender']

    @action(detail=False, methods=['get'], url_path='analytics/customer_count')
    def employee_revenue(self, request, pk=None, *args, **kwargs):
        return Response(
            {"customers_count": customer_count()},
            status=status.HTTP_200_OK
        )
