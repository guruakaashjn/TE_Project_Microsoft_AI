from http.client import ResponseNotReady
import json
import os
import csv
import pickle
import pandas as pd
from django.http import HttpResponse, JsonResponse
from parso import parse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings
# import plotly.plotly as py
from .customPagination import CustomPagination

#For visualization
import plotly.graph_objs as go
import chart_studio
chart_studio.tools.set_credentials_file(username='PlotGuruVes', api_key='FhPEgIKGNSQmOpjZXahe')
# Add Mapbox access token here 
mapbox_access_token = 'pk.eyJ1IjoiYXNjaHJvY2siLCJhIjoiY2p2NnRoeHc2MDkxbTQ0bnR6aTVwZDNsaCJ9.MA76hkxD3rOGgnVCDBVC9w'



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
    pagination_class = CustomPagination
    print(os.path.join(settings.BASE_DIR, 'dataset.csv'))
    csvFilePath = open(os.path.join(settings.BASE_DIR, 'dataset.csv'))
    #read csv file
    df = pd.read_csv(csvFilePath)
    print(type(df))
    result = df.to_json(orient="split")
    print(type(result))
    parsed_dict = json.loads(result)
    # print(type(parsed_dict))
    # parsed = json.dumps(parsed_dict)
    # print(type(parsed))
    # # print(parsed)
    return Response(parsed_dict['data'])

@api_view(['GET'])
def dataset(request):
    page = int(request.query_params["page"])
    # print(page)
    # limit = 50
    upperlimit = 50*page
    lowerlimit = 50*(page-1) + 1

    #! FOR OPTIMIZED PAGINATION NEEDS WORK
    # csvFilePath = open(os.path.join(settings.BASE_DIR, 'dataset.csv'))
    # #read csv file
    # df = pd.read_csv(csvFilePath)
    # data = []
    # count = 1
    # #Region_Area_State,Year,Wind_Speed,Rainfall_Actual,Rainfall_Normal,Population_Urban,Population_Rural,MSW,Recycling_Units,Atmosheric_Microplastics,Beach_Plastics,Climate_Change,Natural_Calamities,Plastic_Production,Plastic_Production_Class
    # for i in range(lowerlimit, upperlimit):
    #     data.append({
    #         "Sr.no": i,
    #         "Year": df['Year'][i],
    #         "State": df['Region_Area_State'][i],
    #         "Wind Speed": float(df['Wind_Speed'][i]),
    #         "Rainfall": float(df['Rainfall_Actual'][i]),
    #         "Urban Population": float(df['Population_Urban'][i]),
    #         "Rural Population": float(df['Population_Rural'][i]),
    #         "MSW": float(df['MSW'][i]),
    #         "Recycling Plants": float(df['Recycling_Units'][i]),
    #         "Atmospheric microPlastics": float(df['Atmosheric_Microplastics'][i]),
    #         "Beach Plastics": float(df['Beach_Plastics'][i]),
    #         "Climate Change": float(df['Climate_Change'][i]),
    #         "Natural Calamities": float(df['Natural_Calamities'][i]),
    #         "Plastic Production": float(df['Plastic_Production'][i]),
    #         "Plastic Production Class": df['Plastic_Production_Class'][i]
    #     })

    with open(os.path.join(settings.BASE_DIR ,'dataset.csv'), 'r' ) as file:
        reader = csv.reader(file)
        # To skip the titles
        next(reader)
        data = []
        count = 1
        # creating custom pagination here not django relateds
        for row in reader:
            if (count >= lowerlimit and count <= upperlimit):
                data.append(
                    {
                        "Sr.no": count,
                        "Year": row[1],
                        "State": row[0],
                        "Wind Speed": row[2],
                        "Rainfall": row[3],
                        "Urban Population": row[5],
                        "Rural Population": row[6],
                        "MSW": row[7],
                        # "Recycling Plants": row[8],
                        "Atmospheric MicroPlastics": row[9],
                        "Beach Plastics": row[10],
                        "Climate Change": row[11],
                        "Natural Calamities": row[12],
                        "Plastic Production": row[13],
                        "Plastic Production Class": row[14]
                    }
                )
            count+=1
        # print(type(data))
    parsed = json.dumps(data)
    result = json.loads(parsed)
    # return JsonResponse(data, safe=False)
    return Response(result)
    

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
    dataset = pd.read_csv(os.path.join(settings.BASE_DIR, 'recycling_plant.csv'))
    dataset = dataset.iloc[1::2]
    dataset = dataset.reset_index(drop = True)
    dataset.dropna(subset = ['Latitude', 'Longitude'], inplace = True)
    dataset.rename(columns = {'Capacity(TPA)':'Capacity', 'Materials_Processed(TPA)': 'Materials_Processed'}, inplace = True)
    recycling_data = {
        "latitude": dataset["Latitude"].to_list(),
        "longitude": dataset["Longitude"].to_list(),
        "recyclingName": dataset["Recycling_Plant"].to_list(),
        "materialsAccepted": dataset["Materials_Accepted"].to_list(),
        "recycledProducts": dataset["Recycled_Products"].to_list(),
    }
    # jsonData = json.dumps(recycling_data, allow_nan=True, sort_keys=True)
    # jsonData = json.loads(jsonData)

    return Response(recycling_data)