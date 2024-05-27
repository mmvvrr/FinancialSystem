from django.db.models import ExpressionWrapper, FloatField, F
from django.db.models.functions import Round

from finsite.models import SupplyLine


def supply_data_detail(supply):
    supply_lines = SupplyLine.objects.filter(supply_id=supply).annotate(
        product_pk=F('product__pk'),
        product_name=F('product__name'),
        provider_name=F('provider__name'),
        unit_price=F('unit_product_price'),
        total_price=Round(ExpressionWrapper(F('unit_product_price') * F('quantity'), output_field=FloatField()), 2)
    ).values(
        'product_pk',
        'product_name',
        'provider_name',
        'quantity',
        'unit_price',
        'total_price'
    )

    return supply_lines