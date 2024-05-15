from rest_framework import serializers
from finsite.models import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['pk', 'url', 'name', 'description']