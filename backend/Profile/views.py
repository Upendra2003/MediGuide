from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Profile
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer,UserRegistrationSerializer
from rest_framework_simplejwt.tokens import RefreshToken


#API for User
@api_view(['GET'])
def getUsers(request):
    users = Profile.objects.all()
    serializer = UserSerializer(users,many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getUser(request,id):
    user = Profile.objects.get(pk = id)
    serializer = UserSerializer(user,many = False)
    return Response(serializer.data)

# @api_view(['PUT'])
# def updateUser(request,id):
#     data=request.data
#     user=User.objects.get(pk=id)
#     serializer=UserSerializer(instance=user,data=data)

#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

@api_view(['DELETE'])
def deleteuser(request,id):
    user=Profile.objects.get(pk=id)
    user.delete()
    return Response("user deleted")

#User registration

@api_view(['POST'])
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