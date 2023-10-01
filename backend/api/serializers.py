from rest_framework.serializers import ModelSerializer
from .models import Prediction
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

class PredictionSerializer(ModelSerializer):
    class Meta:
        model=Prediction
        fields='__all__'

