from finsite.models import Order
from rest_framework import serializers


class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = [
            'pk',
            'url',
            'created_at',
            'status'
        ]
