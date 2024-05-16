from finsite.models import *
import numpy as np
from faker import Faker


def provider_seeder():
    if Provider.objects.count() == 0:
        providers = []
        for _ in range(36):
            providers.append(_set_provider())
        Provider.objects.bulk_create(providers)


def _set_provider():
    fake = Faker(['ru_RU'])

    return Provider(
        name=fake.company(),
        email=fake.email(),
        phone=fake.phone_number(),
    )
