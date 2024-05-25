from django.db.models import Sum, Count, F, CharField, Value, Func
from django.db.models.functions import TruncDay, Round
from datetime import datetime

from finsite.models import OrderLine


def product_data_sales(product_id, **kwargs):
    to_date = kwargs.get("to_date")
    from_date = kwargs.get("from_date")

    queryset = (
        OrderLine.objects
        .filter(product=product_id)
        .annotate(day=TruncDay('created_at'))
        .values('day')
    )

    if to_date is not None:
        queryset = queryset.filter(created_at__gte=datetime.fromisoformat(to_date))
    if from_date is not None:
        queryset = queryset.filter(created_at__lte=datetime.fromisoformat(from_date))

    return queryset.annotate(
        total_sales=Round(Sum(F('price__price') * F('quantity'))),
        total_quantity=Sum('quantity'),
        formatted_date=Func(
            F('day'),
            Value('DD.MM.YYYY'),
            function='to_char',
            output_field=CharField()
        )
    ).values('formatted_date', 'total_sales', 'total_quantity').order_by('day')
