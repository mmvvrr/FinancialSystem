from datetime import datetime

from django.contrib.postgres.expressions import ArraySubquery
from django.db.models import F, OuterRef, Sum, Subquery, Func
from django.db.models.functions import JSONObject, Round

from finsite.models import ProductPriceHistory, Product, OrderLine, Order, Employee


def employee_all_sales(product_id, **kwargs):
    to_date = kwargs.get('to_date')
    from_date = kwargs.get('from_date')
    subquery = Employee.objects.filter(id=OuterRef("pk")).annotate(
        total=Func(F('order_lines__price__price')*F('order_lines__quantity'), function='SUM')
    )

    if to_date: subquery = subquery.filter(created_at__gte=datetime.fromisoformat(to_date))
    if from_date: subquery = subquery.filter(created_at__lte=datetime.fromisoformat(from_date))

    subquery = subquery.values("total")
    return (
        Employee
        .objects
        .filter(pk=product_id)
        .annotate(sales=ArraySubquery(subquery))
        .values("surname", "name", "patronymic", "email", "sales")
    )
