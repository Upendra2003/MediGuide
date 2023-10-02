from rest_framework.serializers import ModelSerializer
from .models import Profile
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from django.contrib.auth.models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class UserRegistrationSerializer(ModelSerializer):
    password = serializers.CharField(write_only = True)
    password2 = serializers.CharField(write_only = True)
    class Meta:
        model = Profile
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs = {
            'password2' : {'write_only':True}
        }
    
    def save(self):
        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({"Error":"Password does not match"})
        
        profile = User(username = self.validated_data['username'], email = self.validated_data['email'])
        profile.set_password(password)
        profile.save()

        return profile
    
# class UserloginSerializer(ModelSerializer):
#     password = serializers.CharField(write_only = True)
#     class Meta:
#         model = User
#         fields = ['username', 'password']
#     def login(request):