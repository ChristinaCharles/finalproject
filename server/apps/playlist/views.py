
# Create your views here.
from django.shortcuts import render, HttpResponse, redirect
from django.core import serializers
from .models import User, Song, Count
import json

# Create your views here.
def index(req):
    user = User.objects.all()
    print(user)
    print('helloo')
    serialized_users = serializers.serialize('json', user)
    return HttpResponse(serialized_users, content_type='application/json', status=200)

def createUser(req):
    new_user = json.loads(req.body.decode())

    user=User.objects.create(**new_user)
    print(user.first_name)
    print(User.objects.all())
    return HttpResponse('this works')
    # return redirect('/')
