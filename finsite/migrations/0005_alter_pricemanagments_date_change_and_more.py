# Generated by Django 5.0.6 on 2024-05-13 09:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('finsite', '0004_alter_categories_description_alter_categories_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pricemanagments',
            name='date_change',
            field=models.DateField(default=datetime.datetime(2024, 5, 13, 18, 54, 10, 593466), verbose_name='Дата изменения цены'),
        ),
        migrations.AlterField(
            model_name='supplies',
            name='date_change',
            field=models.DateField(default=datetime.datetime(2024, 5, 13, 18, 54, 10, 593790), verbose_name='Дата поставки'),
        ),
    ]
