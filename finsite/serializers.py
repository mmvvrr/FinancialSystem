from .models import *
from rest_framework import serializers


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['url', 'name', 'description']


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    category = serializers.HyperlinkedRelatedField(
        many=False,
        read_only=True,
        view_name='category-detail',
        lookup_field='id'
    )
    class Meta:
        model = Product
        fields = ['url', 'name', 'description', 'category']