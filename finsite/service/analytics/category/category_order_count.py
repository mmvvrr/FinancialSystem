from django.db.models import Count

from finsite.models import Category, Order


def category_order_count(category):
    order_count = (
        Order
        .objects
        .filter(order_lines__product__category_id__in=list(Category.objects.filter(parent_id=category).values_list('id', flat=True)))
        .annotate(num_orders=Count('id'))
        .count()
    )
    return order_count
