from django.db.models import Sum, F, Count
from django.db.models.functions import Round

from finsite.models import *


def customers_information():
    #Доработать подсчет общего количества заказов и общей принесенной суммы
    return (
        Customer.objects
        .annotate(
            total_quantity_order=Count('orders', distinct=True),
            total_amount_order=Round(Sum(F('orders__order_lines__quantity') * F('orders__order_lines__price__price'), distinct=True), 2)
        )
        .values("pk", "surname", "name", "patronymic", "date_birth", "gender", "phone", "email", "total_quantity_order", 'total_amount_order')
        .order_by('-total_quantity_order')
    )
