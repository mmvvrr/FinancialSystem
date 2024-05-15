from finsite.models import Product
from rest_framework import serializers
from finsite.serializer.category import CategorySerializer


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=False, read_only=True)
    class Meta:
        model = Product
        fields = ['pk', 'url', 'name', 'description', 'category']