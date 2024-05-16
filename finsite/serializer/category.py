from rest_framework import serializers
from finsite.models import Category
from .products import ProductSerializer


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['pk', 'name', 'description', 'products']
