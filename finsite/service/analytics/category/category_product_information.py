from django.db.models import Sum, F, Count, OuterRef, Func, Subquery
from django.db.models.functions import Round

from finsite.models import OrderLine, Category, Order, Product


def category_product_information(category):
    products = (
        Product
        .objects
        .filter(category__in=list(Category.objects.filter(parent_id=category).values_list("id", flat=True)))
        .annotate(
            total_quantity=Count('order_lines__order', distinct=True),
            total_amount=Round(Sum(F('order_lines__quantity') * F('order_lines__price__price')), 2)
        )
        .values('pk', 'name', 'total_quantity', 'total_amount')
    )

    return products
