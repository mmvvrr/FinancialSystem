from .models import *
from rest_framework import serializers


# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields = ['pk', 'url', 'name', 'description']


# class ProductSerializer(serializers_dir.ModelSerializer):
#     category = CategorySerializer(many=False, read_only=True)
#     class Meta:
#         model = Product
#         fields = ['pk', 'url', 'name', 'description', 'category']