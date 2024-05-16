from django.http import JsonResponse
from .models import *
from .seed import seed_db


def index(request):
    data = list(Product.objects.values())
    return JsonResponse(data, safe=False)

def seed(request):
    seed_db()

    pass
