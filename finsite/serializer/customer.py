from finsite.models import Customer
from rest_framework import serializers


class CustomerSerializer(serializers.HyperlinkedModelSerializer):

    orders = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='order-detail'
    )
    class Meta:
        model = Customer
        fields = [
            'pk',
            'url',
            'name',
            'surname',
            'patronymic',
            'email',
            'phone',
            'gender',
            'date_birth',
            'orders'
        ]
