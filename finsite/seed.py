from django_seed import Seed
from .models import *
import numpy as np
from faker import Faker


def seed_db():

    fake = Faker(['ru_RU'])

    if Provider.objects.count() == 0:
        providers = []
        for _ in range(36):
            provide = Provider(
                name=fake.company(),
                email=fake.email(),
                phone=fake.phone_number(),
            )
            providers.append(provide)
        Provider.objects.bulk_create(providers)

    if Customer.objects.count() == 0:
        customers = []
        for _ in range(1236):
            gender = np.random.choice([True, False], p=[0.6, 0.4])
            if gender:
                name = fake.first_name_male()
                surname = fake.last_name_male()
                patronymic = fake.middle_name_male()
            else:
                name = fake.first_name_female()
                surname = fake.last_name_female()
                patronymic = fake.middle_name_female()

            customer = Customer(
                name=name,
                surname=surname,
                patronymic=patronymic,
                phone=fake.phone_number(),
                email=fake.email(),
                date_birth=fake.date_of_birth(),
                gender=gender,
            )
            customers.append(customer)
        Customer.objects.bulk_create(customers)
