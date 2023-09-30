from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Prediction
from .serializers import PredictionSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/symptoms/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of symptoms'
        },
        {
            'Endpoint': '/symptoms/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single symptom object'
        },
        {
            'Endpoint': '/symptoms/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new symptom with data sent in post request'
        },
        {
            'Endpoint': '/symptoms/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing symptom with data sent in post request'
        },
        {
            'Endpoint': '/symptoms/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting symptom'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getSymptoms(request):
    symptoms=Prediction.objects.all()
    serializer=PredictionSerializer(symptoms,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getSymptom(request,id):
    symptom=Prediction.objects.get(pk=id)
    serializer=PredictionSerializer(symptom,many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateSymptom(request,id):
    data=request.data
    symptom=Prediction.objects.get(pk=id)
    serializer=PredictionSerializer(instance=symptom,data=data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def createSymptom(request):
    data=request.data
    print(data)
    sym=Prediction.objects.create(
        symptom=data['symptom']
    )
    serializer=PredictionSerializer(sym,many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteSymptom(request,id):
    symptom=Prediction.objects.get(pk=id)
    symptom.delete()
    return Response("Symptom deleted")