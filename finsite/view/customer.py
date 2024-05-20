from rest_framework import permissions, viewsets
from finsite.serializer import CustomerSerializer
from finsite.models import Customer
import django_filters.rest_framework


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    #permission_classes = [permissions.IsAuthenticated]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    filterset_fields = ['name', 'surname', 'patronymic', 'email', 'date_birth', 'gender']
