from finsite.models import *
import numpy as np
from faker import Faker
from . import *

def seed_db():

    fake = Faker(['ru_RU'])

    provider_seeder()

    customer_seeder()

    # if Customer.objects.count() == 0:
    #     customers = []
    #     for _ in range(1236):
    #         gender = np.random.choice([True, False], p=[0.6, 0.4])
    #         if gender:
    #             name = fake.first_name_male()
    #             surname = fake.last_name_male()
    #             patronymic = fake.middle_name_male()
    #         else:
    #             name = fake.first_name_female()
    #             surname = fake.last_name_female()
    #             patronymic = fake.middle_name_female()
    #
    #         customer = Customer(
    #             name=name,
    #             surname=surname,
    #             patronymic=patronymic,
    #             phone=fake.phone_number(),
    #             email=fake.email(),
    #             date_birth=fake.date_of_birth(),
    #             gender=gender,
    #         )
    #         customers.append(customer)
    #     Customer.objects.bulk_create(customers)
