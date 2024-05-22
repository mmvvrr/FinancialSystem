from datetime import datetime

from django.db.models.functions import ExtractMonth

from finsite.models import Order, OrderLine, Product
from django.db.models import F, OuterRef, Sum, Subquery, Func
from django.db.models import Q, Count


def products_top(**kwargs):
    orders = Order.objects

    return (
        orders
        .values('order_lines__product__name')
        .annotate(total_quantity=Sum('order_lines__quantity'))
        .order_by('-total_quantity')[:int(kwargs.get('count'))]  # Топ 10 продуктов
    )

