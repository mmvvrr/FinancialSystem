
# Сайт для финансового проекта ВКР

Данный проект разработан с целью веселого прикола и чистого комерческого интереса.


## Разработчики

- [Владислав Москальчук (Джангист)](https://github.com/mmvvrr)
- [Даниил Сулейманов (Реактер)](https://github.com/CyberKolyn)


## Установка PostgreSQL

Установка происходит в терминале, епт.

```bash
  sudo su - postgres
  psql
  CREATE USER adminuser WITH PASSWORD 'adminpassword';
  CREATE DATABASE items_database;
```

## Запуск сервера Django

Представим, что все либы установлены, то:

```bash
  pip install django-filter
  pip install djangorestframework
  
  python3 manage.py makemigrations
  python3 manage.py migrate
  python3 manage.py runserver
```
## Посевка фейковых данных

Установка

```bash
  pip install django-seed
```

Для посевки фейковых штуковин используйте seed

```bash
  python3 manage.py seed finsite --number=<Количество>
```
## API запросы

#### Пока их нет, но будет выглядеть вот так

```http
  GET /api/items
```

| Параметр | Тип     | Описание                |
| :-------- | :------- | :------------------------- |
| `cat-id` | `int` | **Обязательный**. Товары из категории |



## Стэк технологий

**Клиент:** React, TailwindCSS

**Server:** Django

**DataBase:** PostgreSQL

## Дорожная карта

- Сделать проект

- Покурить

- Лутануть бабки

