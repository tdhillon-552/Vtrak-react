from rest_framework import serializers
from .models import Vehicletable


class VehSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicletable
        fields = '__all__'
