from finsite.models import Store, Storage, Product
from random import randint


def store_seeder():
    if Store.objects.count() == 0:
        products = _products()
        storages = _storages()
        size_storages = len(storages)
        half_size_storages = size_storages
        stores = []

        for product in products:
            for storage in storages[randint(0, half_size_storages - 1):randint(half_size_storages, size_storages)]:
                stores.append(_set_store(product, storage))
        Store.objects.bulk_create(stores)


def _set_store(product, storage):
    return Store(
        storage=storage,
        product=product,
        quantity=0,
    )


def _products():
    return Product.objects.all()


def _storages():
    return Storage.objects.all()
