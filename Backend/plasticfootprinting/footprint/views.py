from django.shortcuts import render
from django.http import HttpResponse
import pickle

# Create your views here.

def home(request):
    X_test = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0,
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 7, 28.1, 290.7,
        317.2, 1030000, 451000, 218726, 0, 1420.524, 0.378151, 0, 0]
    loaded_model = pickle.load(open('./model/finalized_model.sav', 'rb'))
    result = loaded_model.predict(X_test)
    return HttpResponse(result)