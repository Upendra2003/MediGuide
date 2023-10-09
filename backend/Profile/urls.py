from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns=[
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain'),
    path('user/token/', MyTokenObtainPairView.as_view(), name='token_obtain'),
    path('user/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/',views.getUsers,name='get-user'),
    path('user/<str:id>/',views.getUser,name='get-User'),
    path('user/<str:id>/delete/',views.deleteuser,name='get-delete-User'),
    path('register/',views.register_userProfile,name='register'),
    
]