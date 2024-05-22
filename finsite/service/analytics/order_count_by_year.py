from datetime import datetime

from django.db.models.functions import ExtractMonth

from finsite.models import Order
from django.db.models import Q, Count


def order_count_by_year(year):

    orders = Order.objects.filter(created_at__year=year).count()

    monthly_orders = (
        Order.objects.filter(created_at__year=year)
        .annotate(month=ExtractMonth('created_at'))
        .values('month')
        .annotate(count=Count('id'))
        .order_by('month')
    )

    return (
        {
            "year": year,
            "total_order": orders,
            "monthly_orders_list": list(monthly_orders),
        }
    )
