from finsite.models import Employee
from rest_framework import serializers


class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Employee
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
            'salary'
        ]
