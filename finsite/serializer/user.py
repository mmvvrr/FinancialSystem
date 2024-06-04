from djoser.serializers import UserSerializer as BaseUserSerializer
from rest_framework import serializers


class UserSerializer(BaseUserSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta(BaseUserSerializer.Meta):
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'full_name')

    def get_full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"
