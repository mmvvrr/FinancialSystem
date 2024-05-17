from finsite.models import Product, ProductPriceHistory
import numpy as np
from datetime import datetime, timedelta
from .seed_const import average_prices


def price_seeder():
    if ProductPriceHistory.objects.count() == 0:
        prices = []
        dateList = [datetime.today() - timedelta(days=x) for x in range(503)]
        dateList.reverse()
        base = {dateList[0].strftime('%d.%m.%Y'): {}}
        for avg_price in average_prices:
            pr_s = avg_price[1] + (np.random.randint(1, avg_price[1]) / 100)
            base[dateList[0].strftime('%d.%m.%Y')][avg_price[0]] = pr_s
            prices.append(_set_price(dateList[0], Product.objects.get(name=avg_price[0]), pr_s))

        for date in dateList[1:]:
            for product in list(base[dateList[0].strftime('%d.%m.%Y')].keys()):
                try:
                    if np.random.choice([True, False], p=[0.1, 0.9]):
                        mn = np.random.choice([1, -1], p=[0.7, 0.3])
                        price_chaged = round(
                            (np.random.randint(1, base[dateList[0].strftime('%d.%m.%Y')][product]) / 100) * mn, 2)
                        base[dateList[0].strftime('%d.%m.%Y')][product] = base[dateList[0].strftime('%d.%m.%Y')][
                                                                              product] + price_chaged
                        prices.append(_set_price(date, Product.objects.get(name=product),
                                                 round(base[dateList[0].strftime('%d.%m.%Y')][product], 2)))
                except:
                    pass

        ProductPriceHistory.objects.bulk_create(prices)




def _set_price(date, product, price):
    return ProductPriceHistory(
        created_at=date,
        product=product,
        price=price,
    )
