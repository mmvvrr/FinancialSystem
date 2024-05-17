from finsite.models import Supply, SupplyLine, Storage, Product, Provider, ProductPriceHistory
import numpy as np
from datetime import datetime, timedelta
from .seed_const import categories as categories_const


def supply_seeder():
    if Supply.objects.count() == 0:
        dateList = [datetime.today() - timedelta(days=x) for x in range(503)]
        dateList.reverse()
        providers = _providers()
        products = _products()
        storages = _storages()
        supply_line = []
        for date in dateList:
            if np.random.choice([True, False], p=[0.4, 0.6]):
                supply = _set_supply(date, np.random.choice(storages))
                supply.save()
                for supply_data in range(np.random.randint(3, 10)):
                    unit_product = np.random.choice(products)
                    baseprice = ProductPriceHistory.objects.filter(created_at__lte=date, product=unit_product).order_by('created_at').last().price
                    baseprice = baseprice*(np.random.randint(65, 75)/100)
                    supply_line.append(_set_supplyline(np.random.choice(providers), unit_product, round(baseprice, 2),
                                                       supply, np.random.randint(100, 500)))
        SupplyLine.objects.bulk_create(supply_line)




def _products():
    return Product.objects.all()


def _providers():
    return Provider.objects.all()


def _storages():
    return Storage.objects.all()


def _set_supply(date, storage):
    return Supply(
        created_at=date,
        storage=storage,
    )


def _set_supplyline(provider, product, unit_product_price, supply, quantity):
    return SupplyLine(
        provider=provider,
        product=product,
        supply=supply,
        unit_product_price=unit_product_price,
        quantity=quantity,
    )
