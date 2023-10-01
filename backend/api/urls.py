from django.urls import path
from . import views


urlpatterns=[

  
    path('',views.getRoutes,name='get-routes'),
    path('symptoms/',views.getSymptoms,name='get-symptoms'),
    path('symptoms/create/',views.createSymptom,name='create-symptom'),
    path('symptoms/<str:id>/',views.getSymptom,name='get-symptom'),
    path('symptoms/<str:id>/update/',views.updateSymptom,name='get-update-symptom'),
    path('symptoms/<str:id>/delete/',views.deleteSymptom,name='get-delete-symptom'),
]