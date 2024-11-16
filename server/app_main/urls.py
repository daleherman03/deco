from django.urls import path, include
from .views import *

urlpatterns = [
    path('contact/', contact_create, name='contact-create')
]