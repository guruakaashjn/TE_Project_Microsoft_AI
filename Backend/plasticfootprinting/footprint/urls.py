from unicodedata import name
from django import views
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='index'),
    # path('dataset/', views.csv_to_json, name='csvtojson'),
    path('get-dataset/', views.dataset, name='dataset'),
    path('get-data-year/', views.getDataOneYear, name='one-year-data'),
    path('get-data-state/', views.getDataOneState, name='one-state-data'),
    path('get-random-over/', views.getRandomForestOverYears, name='data-over-years'),
    path('get-data/models/rf-state/', views.getRandomForestState, name='data-over-state'),
    path('get-data/models/cb-state/', views.getCBState, name='data-over-years-catboost'),
    path('get-data/polynomial/', views.getPolynomialReg, name='Polynomail-Regression')
    # path('get-cb-all-states/', views.getCBStateAll, name='data-all-states-catboost'),    
    # path('dataset/download-dataset', views.download_csv, name='download-dataset'),
    # path('recycling-plant/', views.recycling_plant, name='recycling-plant'),
    # path('state-wise/scatterplot/',views.state_wise_scatter, name='state-wise-scatter')
]
