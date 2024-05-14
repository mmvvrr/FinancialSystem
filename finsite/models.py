from django.db import models
from datetime import datetime


class Category(models.Model):
    name = models.CharField(max_length=50, verbose_name=u"Название категории")
    description = models.TextField(max_length=1000, verbose_name=u"Описание категории")


class Provider(models.Model):
    name = models.CharField(max_length=50, verbose_name=u"Название поставщика")
    phone = models.CharField(max_length=13, verbose_name=u"Номер поставщика")
    email = models.EmailField(max_length=50, verbose_name=u"Электронная почта товара")


class Storage(models.Model):
    name = models.CharField(max_length=50, verbose_name=u"Название склада")
    country = models.CharField(max_length=50, verbose_name=u"Страна")
    district = models.CharField(max_length=50, verbose_name=u"Округ")
    region = models.CharField(max_length=50, verbose_name=u"Область")
    city = models.CharField(max_length=25, verbose_name=u"Город")
    street = models.CharField(max_length=50, verbose_name=u"Улица")
    building = models.CharField(max_length=50, verbose_name=u"Дом")


class Product(models.Model):
    name = models.CharField(max_length=50, verbose_name=u"Название товара")
    description = models.TextField(max_length=1000, verbose_name=u"Описание товара")
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, verbose_name=u"Категория")


class PriceManagement(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, verbose_name=u"Номер товара")
    date_change = models.DateField(default=datetime.now(), null=False, verbose_name=u"Дата изменения цены")
    price = models.FloatField(null=False, default=0.0, verbose_name=u"Цена")


class Supplier(models.Model):
    provider = models.ForeignKey(Provider, on_delete=models.SET_NULL, null=True, verbose_name=u"Номер поставщика")
    date_change = models.DateField(default=datetime.now(), null=False, verbose_name=u"Дата поставки")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, verbose_name=u"Номер товара")
    amount = models.IntegerField(null=False, default=0, verbose_name=u"Количество")


class Keep(models.Model):
    storage = models.ForeignKey(Storage, on_delete=models.CASCADE, null=True, verbose_name=u"Номер склада")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, verbose_name=u"Номер товара")
    amount = models.IntegerField(null=False, default=0, verbose_name=u"Количество товара")

# class Sales(models.Model):
#     id_product = models.ForeignKey(Products, on_delete=models.CASCADE, null=True)
#     id_price = models.ForeignKey(PriceManagments, on_delete=models.CASCADE, null=True)
#     amount = models.IntegerField(null=False, default=0)
#     date_transacrion = models.DateField(default=datetime.now(), null=False)
