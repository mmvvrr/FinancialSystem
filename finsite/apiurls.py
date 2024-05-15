from django.urls import path
from .views import *

urlpatterns = [
    path('products', index, name='Products Api')
]