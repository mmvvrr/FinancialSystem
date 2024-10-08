from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from datetime import datetime


class Category(models.Model):
    name = models.CharField(max_length=255, )
    description = models.TextField(max_length=1000, )
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, related_name='childrens')


class Product(models.Model):
    name = models.CharField(max_length=255, )
    description = models.TextField(max_length=1000, )
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='products')
    storage = models.ManyToManyField('Storage', through='Store', related_name='products')


class ProductPriceHistory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, related_name='prices')
    price = models.FloatField(default=0, )
    created_at = models.DateTimeField()


class Storage(models.Model):
    name = models.CharField(max_length=255, default='')
    postal_codes = models.CharField(max_length=255, default='')
    status = models.BooleanField(default=True)
    country = models.CharField(max_length=255, default='')
    district = models.CharField(max_length=255, default='')
    region = models.CharField(max_length=255, default='')
    locality = models.CharField(max_length=255, default='')
    street = models.CharField(max_length=255, default='')
    build = models.CharField(max_length=255, default='')
    price = models.FloatField(default=6250, )
    product = models.ManyToManyField(Product, through='Store', related_name='storages')


class Store(models.Model):
    storage = models.ForeignKey(Storage, on_delete=models.CASCADE, null=True, related_name='stores')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, related_name='stores')
    quantity = models.PositiveIntegerField(default=0, null=False)


class Customer(models.Model):
    name = models.CharField(max_length=255, )
    surname = models.CharField(max_length=255, )
    patronymic = models.CharField(max_length=255, )
    email = models.CharField(max_length=255, )
    phone = models.CharField(max_length=255, )
    date_birth = models.DateField()
    gender = models.BooleanField()


class Review(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True, related_name='reviews')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, related_name='reviews')
    rating = models.PositiveIntegerField(default=0, validators=[MinValueValidator(1), MaxValueValidator(5)], )
    comment = models.TextField(max_length=1255, )


class Provider(models.Model):
    name = models.CharField(max_length=255, )
    phone = models.CharField(max_length=255, )
    email = models.EmailField(max_length=255, )


class Supply(models.Model):
    created_at = models.DateTimeField()
    storage = models.ForeignKey(Storage, on_delete=models.SET_NULL, null=True, related_name='supplies')


class SupplyLine(models.Model):
    provider = models.ForeignKey(Provider, on_delete=models.CASCADE, null=True, related_name='supply_lines')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, related_name='supply_lines')
    supply = models.ForeignKey(Supply, on_delete=models.CASCADE, null=True, related_name='supply_lines')
    unit_product_price = models.FloatField(default=0)
    quantity = models.PositiveIntegerField(default=1, )


class Order(models.Model):
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    status = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(5)], )
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, null=True, related_name='orders')


class Employee(models.Model):
    name = models.CharField(max_length=255, )
    surname = models.CharField(max_length=255, )
    patronymic = models.CharField(max_length=255, )
    email = models.CharField(max_length=255, )
    phone = models.CharField(max_length=255, )
    date_birth = models.DateField()
    gender = models.BooleanField()
    salary = models.FloatField(default=12_250, )


class OrderLine(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True, related_name='order_lines')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, related_name='order_lines')
    price = models.ForeignKey(ProductPriceHistory, on_delete=models.SET_NULL, null=True, related_name='order_lines')
    employee = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True, related_name='order_lines')
    created_at = models.DateTimeField()
    quantity = models.PositiveIntegerField(default=1, )
    store = models.ForeignKey(Store, on_delete=models.SET_NULL, null=True, related_name='order_lines')
