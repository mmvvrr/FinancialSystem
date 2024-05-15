from django.http import JsonResponse
from .models import *


def index(request):
    data = list(Product.objects.values())
    return JsonResponse(data, safe=False)
