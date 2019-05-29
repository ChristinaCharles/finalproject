from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('createuser/', views.createUser),
    path('getSongs/', views.getsongs),
    path('createsong/', views.createsong),
    path('addtoplaylist/', views.addtoplaylist),
    path('getusersongs/<id>/', views.getusersongs),
    path('getOneSong/<id>/', views.getOneSong),
    path('getsongcount/<id>/', views.getsongcount)
]
