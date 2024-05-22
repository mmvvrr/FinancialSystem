from datetime import datetime

from django.contrib.postgres.expressions import ArraySubquery
from django.db.models import F, OuterRef, Sum, Subquery, Func
from django.db.models.functions import JSONObject, Round

from finsite.models import ProductPriceHistory, Product, OrderLine, Order, Employee


def order_by_year(**kwargs):
    to_date = kwargs.get('to_date')
    from_date = kwargs.get('from_date')
    subquery = Order.objects.filter(id=OuterRef("pk")).annotate(
        data=JSONObject(product=F("order_lines__product__name"),
                        base_price=F("order_lines__price__price"),
                        full_price=(F("order_lines__price__price") * F("order_lines__quantity")),
                        quantity=F("order_lines__quantity"))
    )

    if to_date: subquery = subquery.filter(created_at__gte=datetime.fromisoformat(to_date))
    if from_date: subquery = subquery.filter(created_at__lte=datetime.fromisoformat(from_date))

    subquery = subquery.values("data")
    return (
        Order
        .objects
        .filter(created_at__gte=to_date, created_at__lte=from_date)
        .annotate(sales=ArraySubquery(subquery))
        .values("id", "created_at", "sales")[:10]
    )
