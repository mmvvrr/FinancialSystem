from finsite.models import *
import numpy as np
from faker import Faker
from . import *

fake = Faker(['ru_RU'])


def customer_seeder():
    if Customer.objects.count() == 0:
        customers = []
        for _ in range(8232):
            customers.append(_set_provider())
        Customer.objects.bulk_create(customers)


def _set_provider():
    gender = _gender()
    name, surname, patronymic = _full_name(gender)

    return Customer(
        name=name,
        surname=surname,
        patronymic=patronymic,
        phone=fake.phone_number(),
        email=fake.email(),
        date_birth=fake.date_of_birth(minimum_age=20, maximum_age=70),
        gender=gender,
    )


def _gender():
    return np.random.choice([True, False], p=[0.6, 0.4])


def _full_name(gender):
    if gender:
        name = fake.first_name_male()
        surname = fake.last_name_male()
        patronymic = fake.middle_name_male()
    else:
        name = fake.first_name_female()
        surname = fake.last_name_female()
        patronymic = fake.middle_name_female()

    return name, surname, patronymic
