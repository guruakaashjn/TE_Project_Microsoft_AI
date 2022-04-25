from http.client import ResponseNotReady
import json
import os
import csv
import pickle
from wsgiref.util import request_uri
import numpy as np
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

label_encoded = {
"Andaman and Nicobar Islands":	[1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Andhra Pradesh":	[0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Arunachal Pradesh":	[0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Assam":	[0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Bihar":	[0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Chandigarh":	[0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Chhattisgarh":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Dadra and Nagar Haveli and Daman and Diu":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Delhi":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Goa":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Gujarat":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Haryana":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Himachal Pradesh":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Jammu and Kashmir":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Jharkhand":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Karnataka":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Kerala":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Lakshadweep":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Madhya Pradesh":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Maharashtra":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Manipur":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Meghalaya":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Mizoram":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Nagaland":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Odisha":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Puducherry":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Punjab":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Rajasthan":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Sikkim":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Tamil Nadu":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0],
"Telangana":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0],
"Tripura":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0],
"Uttar Pradesh":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0],
"Uttarakhand":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0],
"West Bengal":	[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0],
}


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
def dataset(request):
    page = int(request.query_params["page"])
    # print(page)
    # limit = 50
    upperlimit = 50*page
    lowerlimit = 50*(page-1) + 1

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


# @api_view(['GET', 'POST'])
# def choropleth(request):
#     # year = request.query_params.year
#     df = pd.read_csv(os.path.join(settings.BASE_DIR, 'dataset.csv'))
#     df.drop(columns=['Wind_Speed', 'Rainfall_Actual', 'Rainfall_Normal', 'Population_Urban', 'Population_Rural', 'MSW', 'Recycling_Units', 'Atmosheric_Microplastics', 'Beach_Plastics','Climate_Change', 'Natural_Calamities', 'Plastic_Production_Class'],inplace=True)
#     print(df.shape())
#     india_states = json.load(open(os.path.join(settings.BASE_DIR), 'india.json'))
#     df_year = pd.DataFrame(columns=['State', 'id', 'plastic'])
#     df_year['State'] = df['Region_Area_State'].unique()
#     state_id_map = {}
#     for feature in india_states["features"]:
#         feature["id"] = feature["properties"]["state_code"]
#         state_id_map[feature["properties"]["st_nm"]] = feature["id"]


#@ Scatter map statewise
@api_view(['GET'])
def state_wise_scatter(request):
    state_data = pd.read_csv(os.path.join(settings.BASE_DIR, 'Rough_All_City - Sheet1.csv'))
    state_data['Total_waste_generated_Log'] = np.log(state_data['Total_waste_generated_TPA'])
    state_data['Total_waste_generated_Log'] = state_data['Total_waste_generated_Log'].abs()

    site_lat = state_data.Latitude
    site_lon = state_data.Longitude
    locations_name = "State Name : " + state_data.State
    plastic_amount = state_data['Total_waste_generated_TPA']

    data = {
        "latitude": site_lat,
        "longitude": site_lon,
        "locations_name": f"{locations_name} \n {plastic_amount}",
        "plastic_amount": plastic_amount,
        "color": state_data.Total_waste_generated_Log,
        "size": plastic_amount*5 
    }
    return Response(data)

@api_view(['GET', 'POST'])
def getDataOneYear(request):
    print(request.query_params['year'])
    year = int(request.query_params['year'])
    dataset = pd.read_csv(os.path.join(settings.BASE_DIR, 'dataset.csv'))
    dataset = dataset[dataset['Year'] == year]
    # print(dataset.head)
    rows = []
    states = dataset['Region_Area_State'].values
    plastic = dataset['Plastic_Production'].values
    for i in range(len(states)):
        row = {
            "id": i,
            "year": year,
            "state": states[i],
            "plastic": plastic[i]
        }
        rows.append(row)

    data = {
        "rows": rows
    }
    return Response(data)



#@ Gets the data of one particular state to plot the line graph of a state
@api_view(['GET', 'POST'])
def getDataOneState(request):
    state = request.query_params['state']
    print(state)
    dataset = pd.read_csv(os.path.join(settings.BASE_DIR, 'dataset.csv'))
    dataset = dataset[dataset['Region_Area_State'] == state]
    response = {
        "year": dataset['Year'].values,
        "region": dataset['Region_Area_State'].values,
        "plastic": dataset['Plastic_Production'].values
    }
    return Response(response)

@api_view(['GET', 'POST'])
def getCBState(request):
    print("Catboost")
    state = request.query_params['state']
    year = int(request.query_params['year'])
    print(state)
    print(year)
    years = []
    for i in range(year, 2010, -1):
        years.append(i)

    predict_data = []
    state_lst = label_encoded[state]
    for i in years:
        x = state_lst[:35]
        x.append(int(i))
        predict_data.append(x)
    print(predict_data)
    model = pickle.load(open(os.path.join(settings.BASE_DIR, 'catboost_state'), 'rb'))
    data = model.predict(predict_data)
    return Response({
        "predictedValue": data
    })

@api_view(['GET', 'POST'])
def getCBCountry(request):
    # Map the state with its label encoded value
    year = int(request.query_params['year'])
    years = []
    for i in range(year, 2010, -1):
        years.append(i)

    model = pickle.load(open(os.path.join(settings.BASE_DIR, 'catboost_country'), 'rb'))
    data = model.predict([[years]])
    print(data)
    return Response({
        "predictedValue": data
    })


@api_view(['GET', 'POST'])
def getRandomForestState(request):
    state = request.data['state']
    year = int(request.data['year'])
    # state_lst=[]
    # for i in state:
    #     state_lst.append(label_encoded[i][:])
    #     state_lst.append(year)
    state_lst = label_encoded[state]
    state_lst.append(year)
    model = pickle.load(open(os.path.join(settings.BASE_DIR, 'random_forest.sav'), 'rb'))
    data = model.predict([state_lst])
    return Response({
        "predictedValue": data
    })

@api_view(['GET', 'POST'])
def getRandomForestOverYears(request):
    # print(request.query_params)
    state = request.query_params['state']
    year = int(request.query_params['year'])
    print(state)
    print(year)
    years = []
    for i in range(year, 2010, -1):
        years.append(i)

    predict_data = []
    state_lst = label_encoded[state]
    for i in years:
        # print(i)
        # print(state_lst)
        x = state_lst[:35]
        x.append(int(i))
        # print(x)
        predict_data.append(x)
    model = pickle.load(open(os.path.join(settings.BASE_DIR, 'random_forest'), 'rb'))
    data = model.predict(predict_data)
    print("data: ", data)
    return Response({
        "predictedValue": data
    })



@api_view(['GET'])
def download_csv(request):
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
    return Response(recycling_data)


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


#! PREVIOUS DATASET IMPLEMENTATION
   # @api_view(['GET'])
# def csv_to_json(request):
#     pagination_class = CustomPagination
#     print(os.path.join(settings.BASE_DIR, 'dataset.csv'))
#     csvFilePath = open(os.path.join(settings.BASE_DIR, 'dataset.csv'))
#     #read csv file
#     df = pd.read_csv(csvFilePath)
#     print(type(df))
#     result = df.to_json(orient="split")
#     print(type(result))
#     parsed_dict = json.loads(result)
#     # print(type(parsed_dict))
#     # parsed = json.dumps(parsed_dict)
#     # print(type(parsed))
#     # # print(parsed)
#     return Response(parsed_dict['data'])
