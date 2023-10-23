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

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        profile=Profile.objects.get(user=user)
        # id=json.dumps({"p_id": profile.p_id}, default=str)
        # print(profile.p_id)
        # serializer=ProfileSerializer(profile).data
        # print(serializer.username)
        # Add custom claims
        token['username'] = user.username
        token['p_id'] = str(profile.p_id)
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer

@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def updateProfile(request,id):
    data=request.data
    profile=Profile.objects.get(pk=id)
    print(profile)
    serializer = ProfileSerializer(instance=profile,data=data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


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