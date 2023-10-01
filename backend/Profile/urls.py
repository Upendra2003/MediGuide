from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainSlidingView,
    TokenRefreshSlidingView,
)

urlpatterns=[

    path('user/token/', TokenObtainSlidingView.as_view(), name='token_obtain'),
    path('user/token/refresh/', TokenRefreshSlidingView.as_view(), name='token_refresh'),
    path('users/',views.getUsers,name='get-user'),
    path('user/<str:id>/',views.getUser,name='get-User'),
    path('user/<str:id>/delete/',views.deleteuser,name='get-delete-User'),
    path('register/',views.register_userProfile,name='register'),
]