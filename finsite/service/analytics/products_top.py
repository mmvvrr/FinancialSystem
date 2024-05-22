from datetime import datetime

from django.db.models.functions import ExtractMonth

from finsite.models import Order, OrderLine, Product
from django.db.models import F, OuterRef, Sum, Subquery, Func
from django.db.models import Q, Count


def products_top(**kwargs):
    products = OrderLine.objects
    if kwargs.get('category') != '0':
        products = products.filter(order_lines__product__category__in=kwargs.get('category'))

    return (
        products
        .values('product__name')
        .annotate(total_quantity=Sum('quantity'))
        .annotate(total_sum=Sum(F('quantity') * F('price')))
        .order_by('-total_quantity')[:int(kwargs.get('count', 10))]
    )

