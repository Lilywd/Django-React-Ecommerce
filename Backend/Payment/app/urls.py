from django.contrib import admin
from django.urls import path
from . views import GenerateTokenView

urlpatterns = [
    path('generate-token',GenerateTokenView.as_view()),
#     path('process-payment', ProcessPaymentView.as_view()),
# 
]