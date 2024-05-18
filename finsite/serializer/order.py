from finsite.models import Order
from rest_framework import serializers
from .order_line import OrderLineSerializer


class OrderSerializer(serializers.HyperlinkedModelSerializer):

    customer = serializers.HyperlinkedRelatedField(
        many=False,
        read_only=True,
        view_name='customer-detail'
    )

    order_lines = OrderLineSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = [
            'pk',
            'url',
            'created_at',
            'status',
            'customer',
            'order_lines'
        ]
