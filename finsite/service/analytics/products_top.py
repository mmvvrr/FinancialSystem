from django.db.models.functions import Round

from finsite.models import OrderLine
from django.db.models import F, Sum


def products_top(**kwargs):
    order_lines = OrderLine.objects
    if not not kwargs.get('category'):
        order_lines = order_lines.filter(product__category__in=kwargs.get('category'))

    return (
        order_lines
        .values('product__name')
        .annotate(total_quantity=Sum('quantity'))
        .annotate(total_sum=Round(Sum(F('quantity') * F('price__price'), distinct=True), 2))
        .order_by('-total_quantity')[:int(kwargs.get('count'))]
    )