from django.contrib.postgres.aggregates import ArrayAgg
from django.db.models import F, Sum, Value
from django.db.models.functions import JSONObject, Concat, Round

from finsite.models import Customer, Order


def customer_orders_detail(customer):
    orders = Order.objects.filter(customer_id=customer).annotate(
        total_sum_amount=Round(Sum(F('order_lines__quantity') * F('order_lines__price__price'), distinct=True), 2),
        total_quantity=Sum('order_lines__quantity', distinct=True),
        date=F('created_at'),
        products=ArrayAgg(
            JSONObject(
                product_pk=F('order_lines__product__pk'),
                name=F('order_lines__product__name'),
                quantity=F('order_lines__quantity'),
                unit_price=F('order_lines__price__price'),
                total_price=Round(F('order_lines__quantity') * F('order_lines__price__price'), 2)
            )
        )
    ).values(
        'pk', 'total_sum_amount', 'total_quantity', 'date', 'products'
    )

    customer = Customer.objects.filter(id=customer).annotate(
        full_name=Concat(F('surname'), Value(' '), F('name'), Value(' '), F('patronymic'))
    ).values('full_name').first()

    return  {
        'full_name': customer['full_name'],
        'orders': list(orders)
    }