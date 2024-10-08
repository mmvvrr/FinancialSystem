from finsite.models import Product
from rest_framework import serializers


class ProductSerializer(serializers.HyperlinkedModelSerializer):

    prices = serializers.SerializerMethodField()

    def get_prices(self, obj):
        return obj.prices.first().price

    class Meta:
        model = Product
        fields = ['pk', 'url', 'name', 'description', 'prices']

# class ProductSerializer(serializers.HyperlinkedModelSerializer):
#     # category = serializers.SerializerMethodField()
#
#     class Meta:
#         model = Product
#         fields = ['pk', 'url', 'name', 'description']
#
#     def get_category(self, obj):
#         from .category import CategoryIdSerializer
#         category = obj.category
#         context = self.context
#         return CategoryIdSerializer(category, many=False, read_only=True, context=context).data