from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def send_index(request):
    index = open('static/index.html')
    return HttpResponse(index)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', send_index),
    path('api/', include('app_main.urls')),
]
