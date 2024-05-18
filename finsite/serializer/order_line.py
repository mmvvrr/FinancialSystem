from finsite.models import OrderLine
from rest_framework import serializers
from . import ProductSerializer


class OrderLineSerializer(serializers.HyperlinkedModelSerializer):

    product = ProductSerializer(many=False, read_only=True)
    class Meta:
        model = OrderLine
        fields = [
            'pk',
            'url',
            'created_at',
            'quantity',
            'product'
        ]
