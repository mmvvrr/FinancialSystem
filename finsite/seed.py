from django_seed import Seed
from .models import *


def seed_db():

    seeder = Seed.seeder(locale='ru_RU')

    seeder.add_entity(Provider, 1, {
        'name':  lambda x: seeder.faker.company(),
        'email': lambda x: seeder.faker.ascii_free_email(),
        'phone': lambda x: seeder.faker.phone_number(),
    })


    return seeder.execute()