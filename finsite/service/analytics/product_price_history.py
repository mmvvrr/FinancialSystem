from datetime import datetime

from django.contrib.postgres.expressions import ArraySubquery
from django.db.models import F, OuterRef, Value, CharField, Func
from django.db.models.functions import JSONObject

from finsite.models import ProductPriceHistory, Product


def product_price_history(product_id, **kwargs):
    to_date = kwargs.get('to_date')
    from_date = kwargs.get('from_date')
    subquery = ProductPriceHistory.objects.filter(product_id=OuterRef("pk")).annotate(
        data=JSONObject(price=F("price"),
        created_at=Func(
                F('created_at'),
                Value('DD.MM.YYYY'),
                function='to_char',
                output_field=CharField()
            )
        )
    )

    if to_date: subquery = subquery.filter(created_at__gte=datetime.fromisoformat(to_date))
    if from_date: subquery = subquery.filter(created_at__lte=datetime.fromisoformat(from_date))

    subquery = subquery.order_by('created_at').values_list("data")

    return (
        Product
        .objects
        .filter(pk=product_id)
        .annotate(price=ArraySubquery(subquery))
        .values("name", "price")
        [0]
    )
