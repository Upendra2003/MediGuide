from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from .models import Profile
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer,UserRegistrationSerializer,ProfileSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
import json

# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)

#         profile=Profile.objects.get(user=user)
#         # id=json.dumps({"p_id": profile.p_id}, default=str)
#         # print(profile.p_id)
#         # serializer=ProfileSerializer(profile).data
#         # print(serializer.username)
#         # Add custom claims
#         token['username'] = user.username
#         token['p_id'] = str(profile.p_id)
#         # ...

#         return token

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        try:
            profile = Profile.objects.get(user=user)
            token['p_id'] = str(profile.p_id)
        except Profile.DoesNotExist:
            # If profile doesn't exist, handle it gracefully
            token['p_id'] = None  # Or any default value you prefer

        # Add other custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer

from rest_framework import status
from django.shortcuts import get_object_or_404

@api_view(['PUT'])
def updateProfile(request, id):
    try:
        profile = get_object_or_404(Profile, pk=id)
        serializer = ProfileSerializer(instance=profile, data=request.data)
        print(1)
        if serializer.is_valid():
            # Save profile data
            serializer.save()
            print(2)
            # Handle profile picture upload
            profile_pic = request.FILES.get('profile_pic')
            print(3)
            if profile_pic:
                profile.profile_pic=profile_pic
                profile.save()

            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Profile.DoesNotExist:
        return Response("Profile not found", status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def getProfile(request,id):
    profile=Profile.objects.get(pk=id)
    serializer = ProfileSerializer(profile,many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteuser(request,id):
    user=Profile.objects.get(pk=id)
    user.delete()
    return Response("user deleted")

#User registration

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def register_userProfile(request):
    if request.method == 'POST':
        serializer = UserRegistrationSerializer(data= request.data)
        data = {}

        if serializer.is_valid():
            profile = serializer.save()

            data['response'] = 'Profile has been created'
            data['username'] = profile.username
            data['email'] = profile.email

            # token = Token.objects.get_or_create(user=profile).key
            # data['token'] = token
            refresh = RefreshToken.for_user(profile)
            data['token'] = {
                'refresh': str(refresh),
                'access': str(refresh.access_token)
            }

        else:
            data = serializer.errors
        return Response(data)