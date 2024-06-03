"""
URL configuration for Financial_system project.

The `urlpatterns` list routes URLs to view. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function view
    1. Add an import:  from my_app import view
    2. Add a URL to urlpatterns:  path('', view.home, name='home')
Class-based view
    1. Add an import:  from other_app.view import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from rest_framework import routers
from django.urls import path, include
from finsite.view import *
from finsite.views import LogoutView

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'order_lines', OrderLineViewSet)
router.register(r'product_price_histories', ProductPriceHistoryLineViewSet)
router.register(r'employees', EmployeeViewSet)
router.register(r'supplies', SupplyViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("finsite.urls")),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),

    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path("auth/logout/", LogoutView.as_view()),
]
