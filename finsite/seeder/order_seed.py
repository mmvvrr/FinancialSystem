from finsite.models import Product, Customer, Order, OrderLine, Employee, Store, ProductPriceHistory
import numpy as np
from datetime import datetime, timedelta


def order_seeder():
    if Order.objects.count() == 0:
        dateList = [datetime.today() - timedelta(days=x) for x in range(503)]
        dateList.reverse()
        customers = _customers()
        for customer in customers:
            custumer_type = np.random.choice(['fish', 'kit', 'opt'], p=[0.6, 0.3, 0.1])
            for date in dateList:
                if custumer_type == 'fish':
                    customer_order([0.2, 0.8], 2, 6, date, customer)
                if custumer_type == 'kit':
                    customer_order([0.7, 0.3], 2, 20, date, customer)
                if custumer_type == 'opt':
                    customer_order([0.1, 0.9], 50, 200, date, customer)




def _products():
    return Product.objects.all()


def _store():
    return Store.objects.all()

def _customers():
    return Customer.objects.all()

def _employee():
    return Employee.objects.all()


def _set_order(date, customer):
    return Order(
        created_at=date,
        updated_at=date,
        status=1,
        customer=customer
    )


def _set_order_line(order, product, employee, created_at, quantity, store):
    return OrderLine(
        order=order,
        product=product,
        price=ProductPriceHistory.objects.filter(created_at__lte=created_at, product=product).order_by('created_at').last(),
        employee=employee,
        created_at=created_at,
        quantity=quantity,
        store=store,
    )


def customer_order(p, min, max, date, customer):
    if np.random.choice([True, False], p=p):
        order = _set_order(date, customer)
        order.save()
        ord_line_count = np.random.randint(min, max)
        product_list = list(set(np.random.choice(_products(), size=ord_line_count)))
        for product in product_list:
            if ord_line_count <= 1:
                break
            else:
                quantity = np.random.randint(1, ord_line_count)
                ord_line_count -= quantity
                _set_order_line(order, product, np.random.choice(_employee()), date, quantity, np.random.choice(_store()))
