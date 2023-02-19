from django.urls import include, path
from rest_framework import routers

from shop.views import CategoryViewSet, ProductViewSet

router = routers.DefaultRouter()
router.register(r'category_list', CategoryViewSet)
router.register(r'product_list', ProductViewSet)

urlpatterns = [
   path('api/', include(router.urls)),
]