from finsite.models import Store, Supply, SupplyLine, OrderLine, Review
from random import randint
import random
import numpy as np
reviews = {
    1: {
        'мне': {
            'совсем не': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            },
            'очень не': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            }
        },
        'нам': {
            'совсем не': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            },
            'очень не': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            }
        }
    },
    2: {
        'мне': {
            'не очень': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            },
            'слегка не': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            }
        },
        'нам': {
            'не очень': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            },
            'слегка не': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            }
        }
    },
    3: {
        'мне': {
            'в целом': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            },
            'неплохо': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            }
        },
        'нам': {
            'в целом': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            },
            'неплохо': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            }
        }
    },
    4: {
        'мне': {
            'достаточно': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            },
            'очень': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            }
        },
        'нам': {
            'достаточно': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            },
            'очень': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            }
        }
    },
    5: {
        'мне': {
            'очень': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            },
            'полностью': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            }
        },
        'нам': {
            'очень': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            },
            'полностью': {
                'понравился': ['товар', 'продукт', 'вещь'],
                'устроил': ['товар', 'продукт', 'вещь']
            }
        }
    }
}
reasons = {
    1: [
        'качество оставляет желать лучшего',
        'срок службы оказался слишком коротким',
        'совсем не соответствует описанию',
        'очень неудобен в использовании'
    ],
    2: [
        'качество ниже ожидаемого',
        'срок службы оказался меньше, чем ожидалось',
        'не полностью соответствует описанию',
        'неудобен в использовании'
    ],
    3: [
        'достаточно хорошее качество',
        'срок службы соответствует ожиданиям',
        'соответствует описанию',
        'в целом удобен в использовании'
    ],
    4: [
        'очень хорошее качество',
        'длительный срок службы',
        'полностью соответствует описанию',
        'очень удобен в использовании'
    ],
    5: [
        'отличное качество',
        'очень долгий срок службы',
        'превосходит описание',
        'максимально удобен в использовании'
    ]
}


def generate_review_with_reason(rating):
    subject = random.choice(list(reviews[rating].keys()))
    intensity = random.choice(list(reviews[rating][subject].keys()))
    verb = random.choice(list(reviews[rating][subject][intensity].keys()))
    noun = random.choice(reviews[rating][subject][intensity][verb])
    reason = random.choice(reasons[rating])

    return f"{subject.capitalize()} {intensity} {verb} {noun}. Потому что, {reason}."

def review_seeder():
    if Review.objects.count() == 0:
        for order_line in OrderLine.objects.all():
            review = Review.objects.filter(customer_id=order_line.order.customer_id, product=order_line.product).first()
            if np.random.choice([True, False], p=[0.1, 0.9]):
                rating_number = np.random.randint(1, 5)
                if review is None:
                    (Review(
                        customer=order_line.order.customer,
                        product=order_line.product,
                        rating=rating_number,
                        comment=generate_review_with_reason(rating_number),
                    ).save())