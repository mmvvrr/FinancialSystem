from finsite.models import *
import numpy as np
from faker import Faker
from random import randint

fake = Faker(['ru_RU'])


def employee_seeder():
    if Employee.objects.count() == 0:
        employees = []
        for _ in range(19):
            employees.append(_set_employee())
        Employee.objects.bulk_create(employees)


def _set_employee():
    gender = _gender()
    name, surname, patronymic = _full_name(gender)

    return Employee(
        name=name,
        surname=surname,
        patronymic=patronymic,
        phone=fake.phone_number(),
        email=fake.email(),
        date_birth=fake.date_of_birth(),
        gender=gender,
        salary=randint(35000, 125000)
    )


def _gender():
    return np.random.choice([True, False], p=[0.3, 0.7])


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
