from django.db.models import Count

from finsite.models import SupplyLine, Category


def category_supply_count(category):
    supply_count = SupplyLine.objects.filter(
        product__category__in=list(Category.objects.filter(parent_id=category).values_list('id', flat=True)),
    ).aggregate(total_supplies=Count('supply', distinct=True))

    return supply_count
