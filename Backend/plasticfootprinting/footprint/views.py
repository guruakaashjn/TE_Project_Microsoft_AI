import json
import os
import csv
import pickle
import pandas as pd
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings
from footprint.serializer import JsonSerializer

# Create your views here.


@api_view(['GET'])
def home(request):
    api_urls = {
        'Dataset': '/dataset',
        'Visualisation': '/visualisation',
        'Models': '/models'
    }
    # X_test = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    #     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0,
    #     0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 7, 28.1, 290.7,
    #     317.2, 1030000, 451000, 218726, 0, 1420.524, 0.378151, 0, 0]
    # loaded_model = pickle.load(open('./model/finalized_model.sav', 'rb'))
    # result = loaded_model.predict(X_test)
    return Response(api_urls)

@api_view(['GET'])
def csv_to_json(request):
    print(os.path.join(settings.BASE_DIR, 'dataset.csv'))
    csvFilePath = open(os.path.join(settings.BASE_DIR, 'dataset.csv'))
    #read csv file
    df = pd.read_csv(csvFilePath)
    result = df.to_json(orient="split")
    # print(result)
    parsed = json.loads(result)
    parsed = json.dumps(parsed, indent=2)
    # print(parsed)
    # results = JsonSerializer(parsed, many=True).data
    return Response(parsed)

@api_view(['GET', 'POST'])
def data_visualisation(request):
    year = request.body.year


@api_view(['GET'])
def download_csv(request):
    # file_type = req.params.csv
    response = Response(content_type='text/csv')
    writer = csv.writer(response)
    df = pd.read_csv(os.path.join(settings.BASE_DIR, 'dataset.csv'))
    for line in df:
        writer.writerow(line)
    response['Content-Disposition'] = 'attachment; filename="FootprintAnalysis.csv"'
    return response

@api_view(['GET', 'POST'])
def recycling_plant(request):
    dataset = pd.read_csv(os.path.join(settings.BASE_DIR, 'dataset.csv'))
    dataset = dataset.iloc[1::2]
    dataset = dataset.reset_index(drop = True)
    dataset.dropna(subset = ['Latitude', 'Longitude'], inplace = True)
    dataset.rename(columns = {'Capacity(TPA)':'Capacity', 'Materials_Processed(TPA)': 'Materials_Processed'}, inplace = True)
    recycling_data = {
        "latitude": dataset.Latitude,
        "longitude": dataset.Longitude,
        "recyclingName": dataset.Recycling_Plant,
        "noOfStaff": dataset.Number_of_staffs,
        "materialsAccepted": dataset.Materials_Accepted,
        "recycledProducts": dataset.Recycled_Products,
        "processedMaterials": dataset.Materials_Processed,
        "capacity": dataset.Capacity
    }
    jsonData = json.dumps(recycling_data)
    jsonData = json.loads(jsonData)

    return JsonResponse(jsonData)