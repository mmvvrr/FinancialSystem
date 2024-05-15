from django.http import JsonResponse
from .models import *
from rest_framework import permissions, viewsets
from .serializers import *
from .service.find_product_by_id import FindProductById

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    #permission_classes = [permissions.IsAuthenticated]
