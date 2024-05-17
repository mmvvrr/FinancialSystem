# categories[i][0] - название категории
# categories[i][0] - родитель категории

categories = [
    ['Бытовая техника', ''],
    ['Крупная бытовая техника', 'Бытовая техника'],
    ['Мелкая бытовая техника', 'Бытовая техника'],
    ['Аксессуары для бытовой техники', 'Бытовая техника'],

    ['Электроника', ''],
    ['Смартфоны и аксессуары', 'Электроника'],
    ['Ноутбуки и компьютеры', 'Электроника'],
    ['Телевизоры и аудиотехника', 'Электроника'],
    ['Игровые консоли и игры', 'Электроника'],

    ['Дом и сад', ''],
    ['Мебель', 'Дом и сад'],
    ['Садовый инвентарь', 'Дом и сад'],
    ['Декор', 'Дом и сад'],
    ['Освещение', 'Дом и сад'],

    ['Одежда и обувь', ''],
    ['Женская одежда', 'Одежда и обувь'],
    ['Мужская одежда', 'Одежда и обувь'],
    ['Детская одежда', 'Одежда и обувь'],
    ['Обувь', 'Одежда и обувь'],

    ['Красота и здоровье', ''],
    ['Косметика', 'Красота и здоровье'],
    ['Уход за кожей', 'Красота и здоровье'],
    ['Парфюмерия', 'Красота и здоровье'],
    ['Здоровье и фитнес', 'Красота и здоровье'],

    ['Спорт и отдых', ''],
    ['Спортивное оборудование', 'Спорт и отдых'],
    ['Товары для отдыха на природе', 'Спорт и отдых'],
    ['Велосипеды и самокаты', 'Спорт и отдых'],
    ['Фитнес и йога', 'Спорт и отдых'],

    ['Автотовары', ''],
    ['Автозапчасти', 'Автотовары'],
    ['Автомобильные аксессуары', 'Автотовары'],
    ['Шины и диски', 'Автотовары'],
    ['Масла и технические жидкости', 'Автотовары'],

    ['Детские товары', ''],
    ['Игрушки', 'Детские товары'],
    ['Детская мебель', 'Детские товары'],
    ['Товары для новорожденных', 'Детские товары'],
    ['Детские книги', 'Детские товары'],

    ['Канцтовары', ''],
    ['Офисные принадлежности', 'Канцтовары'],
    ['Товары для школы', 'Канцтовары'],
    ['Бумажная продукция', 'Канцтовары'],
    ['Письменные принадлежности', 'Канцтовары'],

    ['Зоотовары', ''],
    ['Корм для животных', 'Зоотовары'],
    ['Аксессуары для животных', 'Зоотовары'],
    ['Игрушки для животных', 'Зоотовары'],
    ['Средства ухода за животными', 'Зоотовары']
]

# items[i][0] - название продукта
# items[i][0] - родитель продукта

items = [
    ['Холодильник Samsung', 'Крупная бытовая техника'],
    ['Стиральная машина LG', 'Крупная бытовая техника'],
    ['Посудомоечная машина Bosch', 'Крупная бытовая техника'],
    ['Микроволновая печь Panasonic', 'Крупная бытовая техника'],
    ['Пылесос Dyson', 'Мелкая бытовая техника'],
    ['Блендер Philips', 'Мелкая бытовая техника'],
    ['Тостер Moulinex', 'Мелкая бытовая техника'],
    ['Мультиварка Redmond', 'Мелкая бытовая техника'],
    ['Фильтр для воды', 'Аксессуары для бытовой техники'],
    ['Чехол для стиральной машины', 'Аксессуары для бытовой техники'],
    ['Фильтры для пылесоса', 'Аксессуары для бытовой техники'],
    ['Насадки для блендера', 'Аксессуары для бытовой техники'],

    ['Смартфон iPhone', 'Смартфоны и аксессуары'],
    ['Чехол для смартфона', 'Смартфоны и аксессуары'],
    ['Зарядное устройство', 'Смартфоны и аксессуары'],
    ['Наушники AirPods', 'Смартфоны и аксессуары'],
    ['Ноутбук MacBook Pro', 'Ноутбуки и компьютеры'],
    ['Игровой компьютер Alienware', 'Ноутбуки и компьютеры'],
    ['Монитор LG', 'Ноутбуки и компьютеры'],
    ['Клавиатура Logitech', 'Ноутбуки и компьютеры'],
    ['Телевизор Sony', 'Телевизоры и аудиотехника'],
    ['Звуковая панель JBL', 'Телевизоры и аудиотехника'],
    ['Домашний кинотеатр Samsung', 'Телевизоры и аудиотехника'],
    ['Проектор Epson', 'Телевизоры и аудиотехника'],
    ['Игровая консоль PlayStation 5', 'Игровые консоли и игры'],
    ['Видеоигра The Last of Us', 'Игровые консоли и игры'],
    ['Геймпад Xbox', 'Игровые консоли и игры'],
    ['Очки виртуальной реальности Oculus', 'Игровые консоли и игры'],

    ['Диван', 'Мебель'],
    ['Кровать', 'Мебель'],
    ['Стол обеденный', 'Мебель'],
    ['Шкаф', 'Мебель'],
    ['Газонокосилка', 'Садовый инвентарь'],
    ['Лейка', 'Садовый инвентарь'],
    ['Секатор', 'Садовый инвентарь'],
    ['Грабли', 'Садовый инвентарь'],
    ['Картина', 'Декор'],
    ['Ваза', 'Декор'],
    ['Зеркало', 'Декор'],
    ['Подсвечник', 'Декор'],
    ['Настольная лампа', 'Освещение'],
    ['Люстра', 'Освещение'],
    ['Торшер', 'Освещение'],
    ['Светодиодные ленты', 'Освещение'],

    ['Платье', 'Женская одежда'],
    ['Блузка', 'Женская одежда'],
    ['Юбка', 'Женская одежда'],
    ['Жакет', 'Женская одежда'],
    ['Рубашка', 'Мужская одежда'],
    ['Брюки', 'Мужская одежда'],
    ['Куртка', 'Мужская одежда'],
    ['Костюм', 'Мужская одежда'],
    ['Комбинезон', 'Детская одежда'],
    ['Шорты', 'Детская одежда'],
    ['Футболка', 'Детская одежда'],
    ['Платье детское', 'Детская одежда'],
    ['Кроссовки', 'Обувь'],
    ['Туфли', 'Обувь'],
    ['Сапоги', 'Обувь'],
    ['Сандалии', 'Обувь'],

    ['Тушь для ресниц', 'Косметика'],
    ['Помада', 'Косметика'],
    ['Тональный крем', 'Косметика'],
    ['Румяна', 'Косметика'],
    ['Крем для лица', 'Уход за кожей'],
    ['Лосьон для тела', 'Уход за кожей'],
    ['Маска для волос', 'Уход за кожей'],
    ['Скраб для тела', 'Уход за кожей'],
    ['Духи', 'Парфюмерия'],
    ['Туалетная вода', 'Парфюмерия'],
    ['Дезодорант', 'Парфюмерия'],
    ['Ароматические масла', 'Парфюмерия'],
    ['Фитнес-трекер', 'Здоровье и фитнес'],
    ['Массажер', 'Здоровье и фитнес'],
    ['Беговая дорожка', 'Здоровье и фитнес'],
    ['Тренировочный коврик', 'Здоровье и фитнес'],

    ['Гантели', 'Спортивное оборудование'],
    ['Теннисная ракетка', 'Спортивное оборудование'],
    ['Футбольный мяч', 'Спортивное оборудование'],
    ['Батут', 'Спортивное оборудование'],
    ['Палатка', 'Товары для отдыха на природе'],
    ['Спальный мешок', 'Товары для отдыха на природе'],
    ['Термос', 'Товары для отдыха на природе'],
    ['Рюкзак', 'Товары для отдыха на природе'],
    ['Горный велосипед', 'Велосипеды и самокаты'],
    ['Электросамокат', 'Велосипеды и самокаты'],
    ['Детский велосипед', 'Велосипеды и самокаты'],
    ['Защитный шлем', 'Велосипеды и самокаты'],
    ['Фитнес-резинки', 'Фитнес и йога'],
    ['Коврик для йоги', 'Фитнес и йога'],
    ['Гимнастический мяч', 'Фитнес и йога'],
    ['Скакалка', 'Фитнес и йога'],

    ['Фильтр масляный', 'Автозапчасти'],
    ['Тормозные колодки', 'Автозапчасти'],
    ['Аккумулятор', 'Автозапчасти'],
    ['Свечи зажигания', 'Автозапчасти'],
    ['Держатель для телефона', 'Автомобильные аксессуары'],
    ['Автомобильный пылесос', 'Автомобильные аксессуары'],
    ['Органайзер для багажника', 'Автомобильные аксессуары'],
    ['Накидка на сиденье', 'Автомобильные аксессуары'],
    ['Летние шины', 'Шины и диски'],
    ['Зимние шины', 'Шины и диски'],
    ['Литые диски', 'Шины и диски'],
    ['Колесные колпаки', 'Шины и диски'],
    ['Моторное масло', 'Масла и технические жидкости'],
    ['Тормозная жидкость', 'Масла и технические жидкости'],
    ['Антифриз', 'Масла и технические жидкости'],
    ['Трансмиссионное масло', 'Масла и технические жидкости'],

    ['Плюшевая игрушка', 'Игрушки'],
    ['Конструктор LEGO', 'Игрушки'],
    ['Кукла Barbie', 'Игрушки'],
    ['Машинка на радиоуправлении', 'Игрушки'],
    ['Детская кроватка', 'Детская мебель'],
    ['Шкаф для игрушек', 'Детская мебель'],
    ['Пеленальный столик', 'Детская мебель'],
    ['Детский стул', 'Детская мебель'],
    ['Памперсы', 'Товары для новорожденных'],
    ['Пустышки', 'Товары для новорожденных'],
    ['Детские бутылочки', 'Товары для новорожденных'],
    ['Подгузники', 'Товары для новорожденных'],
    ['Сказки', 'Детские книги'],
    ['Раскраски', 'Детские книги'],
    ['Учебники', 'Детские книги'],
    ['Книжки-игрушки', 'Детские книги'],

    ['Бумага для принтера', 'Офисные принадлежности'],
    ['Скрепки', 'Офисные принадлежности'],
    ['Маркер', 'Офисные принадлежности'],
    ['Скотч', 'Офисные принадлежности'],
    ['Ручки', 'Письменные принадлежности'],
    ['Карандаши', 'Письменные принадлежности'],
    ['Ластики', 'Письменные принадлежности'],
    ['Тетради', 'Бумажная продукция'],
    ['Блокноты', 'Бумажная продукция'],
    ['Ежедневник', 'Бумажная продукция'],
    ['Конверты', 'Бумажная продукция'],

    ['Корм для кошек Whiskas', 'Корм для животных'],
    ['Лежак для собак', 'Корм для животных'],
    ['Игрушка для попугая', 'Игрушки для животных'],
    ['Намордник для собаки', 'Аксессуары для животных'],
    ['Щетка для грызунов', 'Аксессуары для животных'],
    ['Ошейник для кошки', 'Аксессуары для животных'],
    ['Клетка для птиц', 'Аксессуары для животных'],
    ['Шампунь для собак', 'Средства ухода за животными'],
    ['Кормушка для грызунов', 'Средства ухода за животными'],
    ['Витаминный комплекс для кошек', 'Средства ухода за животными']
]


#Средняя цена для категории, чтобы более реалистично сделать цены товаров
average_prices_cat = [
    ['Крупная бытовая техника', 45000.0],
    ['Мелкая бытовая техника', 3000.0],
    ['Аксессуары для бытовой техники', 500.0],
    ['Смартфоны и аксессуары', 40000.0],
    ['Ноутбуки и компьютеры', 70000.0],
    ['Телевизоры и аудиотехника', 60000.0],
    ['Игровые консоли и игры', 25000.0],
    ['Мебель', 25000.0],
    ['Садовый инвентарь', 2000.0],
    ['Декор', 5000.0],
    ['Освещение', 3000.0],
    ['Женская одежда', 5000.0],
    ['Мужская одежда', 4000.0],
    ['Детская одежда', 3000.0],
    ['Обувь', 4000.0],
    ['Косметика', 1500.0],
    ['Уход за кожей', 2000.0],
    ['Парфюмерия', 3000.0],
    ['Здоровье и фитнес', 5000.0],
    ['Спортивное оборудование', 10000.0],
    ['Товары для отдыха на природе', 5000.0],
    ['Велосипеды и самокаты', 15000.0],
    ['Фитнес и йога', 3000.0],
    ['Автозапчасти', 5000.0],
    ['Автомобильные аксессуары', 2000.0],
    ['Шины и диски', 8000.0],
    ['Масла и технические жидкости', 1500.0],
    ['Детские товары', 3000.0],
    ['Канцтовары', 1000.0],
    ['Зоотовары', 2000.0]
]

#Реалистичные цены на товары
average_prices = [
    ['Холодильник Samsung', 50000.0],
    ['Стиральная машина LG', 35000.0],
    ['Посудомоечная машина Bosch', 40000.0],
    ['Микроволновая печь Panasonic', 8000.0],
    ['Пылесос Dyson', 25000.0],
    ['Блендер Philips', 3000.0],
    ['Тостер Moulinex', 2000.0],
    ['Мультиварка Redmond', 6000.0],
    ['Фильтр для воды', 1000.0],
    ['Чехол для стиральной машины', 500.0],
    ['Фильтры для пылесоса', 200.0],
    ['Насадки для блендера', 300.0],
    ['Смартфон iPhone', 70000.0],
    ['Чехол для смартфона', 1000.0],
    ['Зарядное устройство', 1500.0],
    ['Наушники AirPods', 10000.0],
    ['Ноутбук MacBook Pro', 130000.0],
    ['Игровой компьютер Alienware', 150000.0],
    ['Монитор LG', 20000.0],
    ['Клавиатура Logitech', 5000.0],
    ['Телевизор Sony', 80000.0],
    ['Звуковая панель JBL', 15000.0],
    ['Домашний кинотеатр Samsung', 60000.0],
    ['Проектор Epson', 50000.0],
    ['Игровая консоль PlayStation 5', 50000.0],
    ['Видеоигра The Last of Us', 4000.0],
    ['Геймпад Xbox', 6000.0],
    ['Очки виртуальной реальности Oculus', 15000.0],
    ['Диван', 35000.0],
    ['Кровать', 45000.0],
    ['Стол обеденный', 10000.0],
    ['Шкаф', 20000.0],
    ['Газонокосилка', 8000.0],
    ['Лейка', 500.0],
    ['Секатор', 300.0],
    ['Грабли', 1000.0],
    ['Картина', 3000.0],
    ['Ваза', 1000.0],
    ['Зеркало', 2000.0],
    ['Подсвечник', 500.0],
    ['Настольная лампа', 1500.0],
    ['Люстра', 5000.0],
    ['Торшер', 3000.0],
    ['Светодиодные ленты', 1000.0],
    ['Платье', 5000.0],
    ['Блузка', 3000.0],
    ['Юбка', 4000.0],
    ['Жакет', 6000.0],
    ['Рубашка', 4000.0],
    ['Брюки', 3500.0],
    ['Куртка', 8000.0],
    ['Костюм', 12000.0],
    ['Комбинезон', 6000.0],
    ['Шорты', 2000.0],
    ['Футболка', 1500.0],
    ['Платье детское', 3500.0],
    ['Кроссовки', 4000.0],
    ['Туфли', 4500.0],
    ['Сапоги', 6000.0],
    ['Сандалии', 2500.0],
    ['Тушь для ресниц', 800.0],
    ['Помада', 1000.0],
    ['Тональный крем', 1500.0],
    ['Румяна', 1200.0],
    ['Крем для лица', 1000.0],
    ['Лосьон для тела', 800.0],
    ['Маска для волос', 1200.0],
    ['Скраб для тела', 1000.0],
    ['Духи', 2000.0],
    ['Туалетная вода', 1500.0],
    ['Дезодорант', 500.0],
    ['Ароматические масла', 1000.0],
    ['Фитнес-трекер', 5000.0],
    ['Массажер', 3000.0],
    ['Беговая дорожка', 60000.0],
    ['Тренировочный коврик', 2000.0],
    ['Гантели', 1000.0],
    ['Теннисная ракетка', 2000.0],
    ['Футбольный мяч', 1000.0],
    ['Батут', 20000.0],
    ['Палатка', 5000.0],
    ['Спальный мешок', 3000.0],
    ['Термос', 800.0],
    ['Рюкзак', 1500.0],
    ['Горный велосипед', 30000.0],
    ['Электросамокат', 25000.0],
    ['Детский велосипед', 7000.0],
    ['Защитный шлем', 1500.0],
    ['Фитнес-резинки', 500.0],
    ['Коврик для йоги', 1000.0],
    ['Гимнастический мяч', 1500.0],
    ['Скакалка', 300.0],
    ['Фильтр масляный', 500.0],
    ['Тормозные колодки', 1000.0],
    ['Аккумулятор', 3000.0],
    ['Свечи зажигания', 200.0],
    ['Держатель для телефона', 300.0],
    ['Автомобильный пылесос', 2000.0],
    ['Органайзер для багажника', 1000.0],
    ['Накидка на сиденье', 500.0],
    ['Летние шины', 8000.0],
    ['Зимние шины', 10000.0],
    ['Литые диски', 15000.0],
    ['Колесные колпаки', 500.0],
    ['Моторное масло', 500.0],
    ['Тормозная жидкость', 300.0],
    ['Антифриз', 400.0],
    ['Трансмиссионное масло', 600.0],
    ['Плюшевая игрушка', 1000.0],
    ['Конструктор LEGO', 3000.0],
    ['Кукла Barbie', 1500.0],
    ['Машинка на радиоуправлении', 2000.0],
    ['Детская кроватка', 5000.0],
    ['Шкаф для игрушек', 4000.0],
    ['Пеленальный столик', 3000.0],
    ['Детский стул', 1500.0],
    ['Памперсы', 1000.0],
    ['Пустышки', 200.0],
    ['Детские бутылочки', 500.0],
    ['Подгузники', 1500.0],
    ['Сказки', 500.0],
    ['Раскраски', 300.0],
    ['Учебники', 1000.0],
    ['Книжки-игрушки', 800.0],
    ['Бумага для принтера', 500.0],
    ['Скрепки', 100.0],
    ['Маркер', 200.0],
    ['Скотч', 50.0],
    ['Ручки', 50.0],
    ['Карандаши', 30.0],
    ['Ластики', 20.0],
    ['Тетради', 150.0],
    ['Блокноты', 200.0],
    ['Ежедневник', 300.0],
    ['Конверты', 100.0],
    ['Корм для кошек Whiskas', 300.0],
    ['Лежак для собак', 2000.0],
    ['Игрушка для попугая', 500.0],
    ['Намордник для собаки', 300.0],
    ['Щетка для грызунов', 100.0],
    ['Ошейник для кошки', 200.0],
    ['Клетка для птиц', 1500.0],
    ['Шампунь для собак', 400.0],
    ['Кормушка для грызунов', 200.0],
    ['Витаминный комплекс для кошек', 250.0]
]
