from finsite.models import Customer, Category


def category_customer_count(category_id):
    customer_count = (
        Customer
        .objects
        .filter(orders__order_lines__product__category__in=list(Category.objects.filter(parent_id=category_id).values_list('id', flat=True)))
        .distinct()
        .count()
    )
    return customer_count
