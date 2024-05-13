from django.http import JsonResponse
from .service.find_product_by_id import FindProductById


def index(request):
    product = FindProductById(1)
    return JsonResponse(product())
