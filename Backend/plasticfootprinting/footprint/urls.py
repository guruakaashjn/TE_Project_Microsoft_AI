from unicodedata import name
from django import views
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='index'),
    path('dataset/', views.csv_to_json, name='csvtojson'),
    path('dataset/download-dataset', views.download_csv, name='download-dataset')
]
