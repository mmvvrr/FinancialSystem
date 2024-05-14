from django.http import JsonResponse
from .models import *
from .service.find_product_by_id import FindProductById


def index(request):
    data = list(Product.objects.values())
    return JsonResponse(data, safe=False)
