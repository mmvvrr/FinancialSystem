from .category import *
from .products import *
from .customer import *
from .order import *
from .order_line import *
from .product_price_history import *




# Динамический импорт, но при его использовании не работает дополнение кода:

# import os
# import glob
# import importlib
#
# package_dir = os.path.dirname(__file__)
#
# module_paths = glob.glob(os.path.join(package_dir, "*.py"))
#
# module_paths = [path for path in module_paths if not path.endswith('__init__.py')]
#
# for module_path in module_paths:
#     module_name = os.path.basename(module_path)[:-3]
#     module = importlib.import_module(f'.{module_name}', package=__name__)
#
#     for attr_name in dir(module):
#         attr = getattr(module, attr_name)
#         if isinstance(attr, type):
#             globals()[attr_name] = attr