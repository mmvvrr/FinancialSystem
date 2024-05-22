from django.db.models import Count
from django.db.models.functions import ExtractMonth

from finsite.models import Supply


def supply_count_by_year(year):
    supply = Supply.objects.filter(created_at__year=year).count()

    monthly_supplies = (
        Supply.objects.filter(created_at__year=year)
        .annotate(month=ExtractMonth('created_at'))
        .values('month', 'storage__name')
        .annotate(count=Count('id'))
        .order_by('month')
    )

    return (
        {
            "year": year,
            "total_supply": supply,
            "monthly_supplies_list": list(monthly_supplies),
        }
    )
