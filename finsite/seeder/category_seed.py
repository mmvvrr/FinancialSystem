from finsite.models import *
import numpy as np
from faker import Faker
from .seed_const import categories as categories_const

fake = Faker(['ru_RU'])


def category_seeder():
    if Category.objects.count() == 0:
        for category in categories_const:
            new_category = _set_category(category[0], category[1])
            new_category.save()


def _set_category(name, parent):
    if parent == '':
        parent_object = None
    else:
        parent_object = Category.objects.get(name=parent)

    return Category(
        name=name,
        description=fake.paragraph(nb_sentences=8),
        parent=parent_object,
    )
