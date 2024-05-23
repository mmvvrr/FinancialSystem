from datetime import datetime

from django.db.models.functions import ExtractMonth, JSONObject

from finsite.models import Order, OrderLine, Product, Customer
from django.db.models import F, OuterRef, Sum, Subquery, Func
from django.db.models import Q, Count


def customer_purchases(**kwargs):
    customer = OrderLine.objects
    if kwargs.get('category') != '0':
        customer = customer.filter(product__category__in=kwargs.get('category'))

    return (
        customer
        .values('order__customer__name', 'order__customer__surname', 'order__customer__patronymic', )
        .annotate(total_quantity=Sum('quantity'))
        #.annotate(data=JSONObject(product=F("product__name")))
        .annotate(total_sum=Sum(F('quantity') * F('price')))
    )
