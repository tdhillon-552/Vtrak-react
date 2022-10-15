from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .serializers import VehSerializer
from .models import Vehicletable


class GetVehs(ListAPIView):
    serializer_class = VehSerializer
    queryset = Vehicletable.objects.all()
