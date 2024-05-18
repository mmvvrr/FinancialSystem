from django.urls import path
from .view import *

urlpatterns = [
    path('products', index, name='Products Api')
]