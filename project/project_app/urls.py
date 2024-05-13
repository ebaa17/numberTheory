from django.urls import path
from . import views

urlpatterns = [
    path('',views.main, name='index'),
    path('cart/', views.cart, name='cart'),
    path('view/', views.view, name='view'),
    path('details/<str:id>/', views.details, name='details'),
    path('add_book/', views.addBook, name='addBook'),
]
