from . import views
from django.urls import path

urlpatterns = [
    path('', views.ListReport.as_view()),
    path('<int:pk>/', views.DailyReport.as_view()),
    path('<str:category>/', views.CategoryReport.as_view()),
]
