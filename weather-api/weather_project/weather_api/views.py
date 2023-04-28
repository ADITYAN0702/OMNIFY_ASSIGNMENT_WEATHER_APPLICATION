from django.http import JsonResponse
import requests
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_weather(request):
    location = request.GET.get('city')
    api='66f297fbd36ffd12d07d6be3f9e11169'
    url = f'http://api.openweathermap.org/data/2.5/weather?q={location}&units=metric&appid={api}'

    response = requests.get(url)
    weather_data = response.json()
    return JsonResponse(weather_data)

