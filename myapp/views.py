from django.shortcuts import render
import requests

def home(request):
    return render(request, 'home.html')

def my_project(request):
    return render(request, 'my_projects.html')

def contact_me(request):
    return render(request, 'contact_me.html')