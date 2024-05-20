from django.contrib.postgres.aggregates import ArrayAgg, JSONBAgg
from django.contrib.postgres.expressions import ArraySubquery
from django.db.models import F, Subquery, OuterRef
from django.db.models.functions import JSONObject

from finsite.models import Product, ProductPriceHistory


def product_prices_by_category(category_id: int):
    subquery = ProductPriceHistory.objects.filter(product_id=OuterRef("pk")).annotate(
        data=JSONObject(price=F("price"), created_at=F("created_at"))
    ).order_by('-created_at').values_list("data")[:1]

    return (
        Product.objects
        .filter(category_id=category_id)
        .annotate(price=ArraySubquery(subquery))
        .values("name", "price")
    )
