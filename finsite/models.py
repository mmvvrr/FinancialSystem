from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from datetime import datetime


class Category(models.Model):
    name = models.CharField(max_length=255, )
    description = models.TextField(max_length=1000, )
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, null=True,  related_name='childrens')


class Product(models.Model):
    name = models.CharField(max_length=255, )
    description = models.TextField(max_length=1000, )
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True,  related_name='products')


class ProductPriceHistory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True,  related_name='prices')
    price = models.FloatField(default=0, )
    created_at = models.DateTimeField(auto_now_add=True)


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
    created_at = models.DateTimeField(auto_now_add=True)


class SupplyLine(models.Model):
    provider = models.ForeignKey(Provider, on_delete=models.CASCADE, null=True,  related_name='supply_lines')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True,  related_name='supply_lines')
    supply = models.ForeignKey(Supply, on_delete=models.CASCADE, null=True,  related_name='supply_lines')
    quantity = models.PositiveIntegerField(default=1, )


class Order(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0), MaxValueValidator(5)], )


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
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True,  related_name='order_lines')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True,  related_name='order_lines')
    price = models.ForeignKey(ProductPriceHistory, on_delete=models.SET_NULL, null=True,  related_name='order_lines')
    employee = models.ForeignKey(Employee, on_delete=models.SET_NULL, null=True,  related_name='order_lines')
    created_at = models.DateTimeField(auto_now_add=True)
    quantity = models.PositiveIntegerField(default=1, )