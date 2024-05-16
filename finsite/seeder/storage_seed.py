from finsite.models import Storage
import numpy as np
from random import randint
from faker import Faker


def storage_seeder():
    if Storage.objects.count() == 0:
        storages = []
        for _ in range(8):
            storages.append(_set_storage())
        Storage.objects.bulk_create(storages)


def _set_storage():
    fake = Faker(['ru_RU'])

    return Storage(
        name=fake.bs(),
        postal_codes=fake.postcode(),
        status=np.random.choice([True, False], p=[0.85, 0.15]),
        country=fake.country(),
        district=_distirct(randint(0, 7)),
        region=fake.region(),
        locality=fake.city(),
        street=fake.street_name(),
        build=fake.building_number(),
        price=randint(45000, 95000),
    )

def _distirct(number: int)-> str:
    districts_rf = [
        "Северо-Кавказский",
        "Южный",
        "Центральный",
        "Северо-Западный",
        "Приволжский",
        "Уральский",
        "Сибирский",
        "Дальневосточный"
    ]

    return districts_rf[number]
