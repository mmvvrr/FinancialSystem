from finsite.models import Customer
from rest_framework import serializers


class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = [
            'pk',
            'url',
            'name',
            'surname',
            'patronymic',
            'email',
            'phone',
            'gender',
            'date_birth'
        ]
