from django.db.models import F, Sum, FloatField
from django.db.models.functions import Coalesce, Round

from finsite.models import Supply


def supply_data_list():
    supplies = Supply.objects.annotate(
        supply_id=F('id'),
        storage_name=F('storage__name'),
        postal_code=F('storage__postal_codes'),
        total_cost=Coalesce(
            Round(
                Sum(
                    F('supply_lines__unit_product_price') * F('supply_lines__quantity'),
                    output_field=FloatField()
                    ),
                2
            ), 0.0),
        delivery_date=F('created_at')
    ).values(
        'supply_id',
        'storage_name',
        'postal_code',
        'total_cost',
        'delivery_date'
    )

    return supplies