from django.shortcuts import render
from django.http import HttpResponse
import pickle
from rest_framework.response import Response
from rest_framework.decorators import api_view
import nltk
import os
import numpy as np
import pandas as pd

# Create your views here.
current_path = os.path.dirname(os.path.abspath(__file__))
clf_path = os.path.join(current_path, 'modified_clf.pkl')
symptoms_path = os.path.join(current_path, 'symptoms.pkl')
precautions_path = os.path.join(current_path, 'precautions.pkl')
description_path = os.path.join(current_path, 'symptom_Description.csv')

clf=pickle.load(open(clf_path,'rb'))
precautions_df=pickle.load(open(precautions_path,'rb'))
symptoms=pickle.load(open(symptoms_path,'rb'))
description=pd.read_csv(description_path)

# @api_view(['POST'])
# def predict_disease(request):
#     data=request.data
#     problem_text=data['text']
#     print(problem_text)
#     processed_text=preprocess_input(problem_text)
#     disease_pred=clf.predict([processed_text])
#     predicted_disease=disease_pred[0].lower()
#     precautions_df['Disease']=precautions_df['Disease'].apply(lambda x:x.lower())
#     precautions=precautions_df[precautions_df['Disease']==predicted_disease]['Precautions'].iloc[0]
#     precautions=precautions.split(',')
#     response_data = {
#         'disease_name':predicted_disease.capitalize(),
#         'precautions':{
#             f'Precaution {index}': precaution
#             for index, precaution in enumerate(precautions, start=1)
#         }
#     }
#     return Response(response_data)


@api_view(['GET'])
def get_symptoms(request):
    # symptoms_per_page = 10  # Number of symptoms per page

    # # Get the parameters from the request or use default values
    # page = int(request.GET.get('page', 1))
    # page_size = int(request.GET.get('page_size', symptoms_per_page))

    # # Example list of symptom names
    # all_symptoms = [
    #     f'{symptom}'
    #     for symptom in symptoms
    # ]

    # # Calculate the start and end index for the current page
    # start_index = (page - 1) * page_size
    # end_index = min(start_index + page_size, len(all_symptoms))

    # # Extract symptoms for the current page
    # symptoms_for_page = all_symptoms[start_index:end_index]
    print(1)
    # for i in symptoms:
    #     print(i)
    # return Response({
    #     f'symptom {index}': symptom
    #     for index,symptom in enumerate(symptoms,start=1)
    # })

def process_list(symptoms_list):
    symptoms_modified=symptoms[:-1]
    # print(symptoms_modified)
    lst=[1 if symptom in symptoms_list else 0 for symptom in symptoms_modified]
    return lst

@api_view(['POST'])
def process_selected_symptoms(request):
    if request.method == 'POST':
        data = request.data.get('symptoms', [])  # Get the selected symptoms from the request
        # Process the selected symptoms as needed
        print('Selected symptoms:', data)
        result=process_list(data)
        predicted_disease=clf.predict([result])[0]

        #handle precautions
        predicted_disease=predicted_disease.lower()
        precautions_df['Disease']=precautions_df['Disease'].apply(lambda x:x.lower())
        precautions=precautions_df[precautions_df['Disease']==predicted_disease]['Precautions'].iloc[0]
        precautions=precautions.split(',')

        #handle description
        description['Disease']=description['Disease'].apply(lambda x:x.lower())
        disease_description=description[description['Disease']==predicted_disease]['Description'].iloc[0]
        print(predicted_disease)
        response_data = {
            'disease_name':predicted_disease.capitalize(),
            'precautions':{
                f'Precaution {index}': precaution
                for index, precaution in enumerate(precautions, start=1)
            },
            'description':disease_description
        }
        return Response(response_data)
    else:
        return Response({'error': 'Only POST requests are allowed'})