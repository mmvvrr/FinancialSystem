from finsite.models import Supply, SupplyLine, Storage, Product, Provider
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
                    supply_line.append(_set_supplyline(np.random.choice(providers), np.random.choice(products),
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


def _set_supplyline(provider, product, supply, quantity):
    return SupplyLine(
        provider=provider,
        product=product,
        supply=supply,
        quantity=quantity,
    )
