from finsite.models import Supply
from rest_framework import serializers


class SupplySerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Supply
        fields = [
            'pk',
            'url',
            'created_at',
        ]
