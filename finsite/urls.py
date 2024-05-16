from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='Index page'),
    path('seed/', seed, name='Seed page')
]