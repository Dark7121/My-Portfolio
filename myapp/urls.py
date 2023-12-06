from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('project/', views.my_project, name='project'),
    path('contact-me/', views.contact_me, name='contact-me'),
    path('project/contact-me', views.contact_me, name='contact-me'),
    path('contact-me/project', views.my_project, name='project'),
    path('contact-me/contact-me', views.contact_me, name='contact-me'),
    path('project/project', views.my_project, name='project'),
    path('no/', views.no, name='restricted'),
]