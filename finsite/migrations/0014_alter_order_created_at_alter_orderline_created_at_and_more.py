# Generated by Django 4.2.11 on 2024-05-17 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finsite', '0013_orderline_store_supply_storage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='created_at',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='orderline',
            name='created_at',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='productpricehistory',
            name='created_at',
            field=models.DateTimeField(),
        ),
    ]
