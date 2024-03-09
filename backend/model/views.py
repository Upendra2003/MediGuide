from django.shortcuts import render
from django.http import HttpResponse
import pickle
from rest_framework.response import Response
from rest_framework.decorators import api_view
import nltk
import os

# Create your views here.
current_path = os.path.dirname(os.path.abspath(__file__))
clf_path = os.path.join(current_path, 'clf.pkl')
symptoms_path = os.path.join(current_path, 'symptoms.pkl')
precautions_path = os.path.join(current_path, 'precautions.pkl')

clf=pickle.load(open(clf_path,'rb'))
precautions_df=pickle.load(open(precautions_path,'rb'))
symptoms=pickle.load(open(symptoms_path,'rb'))

from nltk.stem.porter import PorterStemmer
ps=PorterStemmer()
def preprocess_input(symptom_text):
    lst=[]
    for symptom in symptom_text:
        lst.append(ps.stem(symptom))
    processed_input=[1 if symptom in symptom_text else 0 for symptom in symptoms]
    return processed_input



@api_view(['POST'])
def predict_disease(request):
    data=request.data
    problem_text=data['text']
    print(problem_text)
    processed_text=preprocess_input(problem_text)
    disease_pred=clf.predict([processed_text])
    predicted_disease=disease_pred[0].lower()
    precautions_df['Disease']=precautions_df['Disease'].apply(lambda x:x.lower())
    precautions=precautions_df[precautions_df['Disease']==predicted_disease]['Precautions'].iloc[0]
    precautions=precautions.split(',')
    response_data = {
        'disease_name':predicted_disease.capitalize(),
        'precautions':{
            f'Precaution {index}': precaution
            for index, precaution in enumerate(precautions, start=1)
        }
    }
    return Response(response_data)