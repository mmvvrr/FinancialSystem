from datetime import datetime

from django.db.models.functions import ExtractMonth, JSONObject

from finsite.models import Order
from django.db.models import F, OuterRef, Sum, Subquery, Func
from django.db.models import Q, Count


def products_by_year(year, **kwargs):

    orders = Order.objects.filter(created_at__year=year)
    if kwargs.get('category') != '0':
        orders = orders.filter(order_lines__product__category=kwargs.get('category'))
    total_orders = orders.aggregate(total_quantity=Sum('order_lines__quantity'))['total_quantity'] or 0

    monthly_orders = (
        orders
        .annotate(month=ExtractMonth('created_at'))
        .values('month')
        .annotate(count=Sum('order_lines__quantity'))
        .order_by('month')
    )

    return (
        {
            "year": year,
            "total_sells": total_orders,
            "monthly_sell_list": list(monthly_orders),
        }
    )
