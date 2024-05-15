from rest_framework import serializers
from finsite.models import Category

class CategorySerializer(serializers.HyperlinkedModelSerializer):
    product = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['pk', 'url', 'name', 'description', 'product']

    def get_product(self, obj):
        from .products import ProductSerializer
        products = obj.product_set.all()
        context = self.context
        return ProductSerializer(products, many=True, read_only=True, context=context).data

class CategoryIdSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['pk', 'url', 'name', 'description']