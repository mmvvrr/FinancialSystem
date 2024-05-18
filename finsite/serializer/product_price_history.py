from finsite.models import ProductPriceHistory
from rest_framework import serializers
from .products import ProductSerializer


class ProductPriceHistorySerializer(serializers.HyperlinkedModelSerializer):

    product = ProductSerializer(many=False, read_only=False)

    class Meta:
        model = ProductPriceHistory
        fields = [
            'pk',
            'url',
            'created_at',
            'price',
            'product'
        ]
