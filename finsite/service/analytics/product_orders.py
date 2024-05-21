from datetime import datetime

from django.contrib.postgres.expressions import ArraySubquery
from django.db.models import F, OuterRef, Sum, Subquery, Func
from django.db.models.functions import JSONObject, Round

from finsite.models import ProductPriceHistory, Product, OrderLine, Order


def product_orders(product_id, **kwargs):
    to_date = kwargs.get('to_date')
    from_date = kwargs.get('from_date')
    subquery = OrderLine.objects.filter(product_id=OuterRef("pk")).annotate(
        total=Func(F('price__price'), function='SUM')#Sum('price__price'),
    )

    if to_date: subquery = subquery.filter(created_at__gte=datetime.fromisoformat(to_date))
    if from_date: subquery = subquery.filter(created_at__lte=datetime.fromisoformat(from_date))

    subquery = subquery.values("total")
    return (
        Product
        .objects
        .filter(pk=product_id)
        .annotate(price=Round(Subquery(subquery), 2))
        .values("name", "price")
    )
