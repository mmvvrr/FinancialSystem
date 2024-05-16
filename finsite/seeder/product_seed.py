from finsite.models import Product, Category
from faker import Faker
from .seed_const import items as products

fake = Faker(['ru_RU'])


def product_seeder():
    if Product.objects.count() == 0:
        for product in products:
            new_product = _set_product(product[0], product[1])
            new_product.save()


def _set_product(name, category_name):
    category = Category.objects.get(name=category_name)

    return Product(
        name=name,
        description=fake.paragraph(nb_sentences=8),
        category=category
    )
