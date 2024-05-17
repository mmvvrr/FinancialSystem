from finsite.models import Store, Supply, SupplyLine
from random import randint


def store_seeder():
    if Store.objects.count() == 0:
        for supply_line in SupplyLine.objects.all():
            store = Store.objects.filter(storage=supply_line.supply.storage, product=supply_line.product).first()

            if store is None:
                (Store(
                    storage=supply_line.supply.storage,
                    product=supply_line.product,
                    quantity=supply_line.quantity
                ).save())
            else:
                store.quantity += supply_line.quantity
                store.save()

