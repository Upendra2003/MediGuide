from django.urls import path,include
from . import views

urlpatterns = [
    # path('',views.predict_disease,name='predict-disease'),
    path('get_symptoms/',views.get_symptoms,name='get-symptoms'),
    path('predict/',views.process_selected_symptoms,name='predict-disease1'),
    path('scan_image/',views.scan_image,name='scan_image'),
]