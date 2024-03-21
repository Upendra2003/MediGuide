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
    
    path('register/',views.register_userProfile,name='register'),   

    path('update-profile/<uuid:id>/',views.updateProfile,name='update-profile'),
    path('get-profile/<str:id>',views.getProfile,name='get-profile'),
]