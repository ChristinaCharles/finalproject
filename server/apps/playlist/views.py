# Create your views here.
from django.shortcuts import render, HttpResponse, redirect
from django.core import serializers
from .models import User, Song, Count
import json
import bcrypt


# Create your views here.
def index(req):
    user = User.objects.all()
    serialized_users = serializers.serialize('json', user)
    return HttpResponse(serialized_users, content_type='application/json', status=200)

def login(req):
    loginUser = json.loads(req.body.decode())
    print("**********", loginUser['email'])
    user = User.objects.get(email=loginUser['email'])
    if bcrypt.checkpw(loginUser['password'].encode(), user.password.encode()):
        print("password match")
    else:
        return HttpResponse(status=400)
    return HttpResponse(user.id, status=200)


def createUser(req):
    new_user = json.loads(req.body.decode())
    pw_hash = bcrypt.hashpw(new_user['password'].encode(), bcrypt.gensalt())
    user = User.objects.create(firstName=new_user['firstName'], lastName=new_user['lastName'], email=new_user['email'], password=pw_hash)
    print("THIS IS THE PASSWORD HASH!!!!!!!!!!!", pw_hash)

    return HttpResponse(user.id)


def getsongs(req):
    songs = Song.objects.all()
    serialized_users = serializers.serialize('json', songs)
    return HttpResponse(serialized_users, content_type='application/json', status=200)


def createsong(req):
    new_song = json.loads(req.body.decode())

    song = Song.objects.create(title=new_song['title'], artist=new_song['artist'], total_times_added=1)
    return HttpResponse(song.title)


def addtoplaylist(req):
    vals = json.loads(req.body.decode())
    song = Song.objects.get(id=vals['song'])
    user = User.objects.get(id=vals['user'])
    user.songs.add(song)
    song.total_times_added += 1

    if Count.objects.filter(user=user, song=song).exists():
        print('yes')
        count = Count.objects.get(user=user, song=song)
        count.number += 1
        count.save()

        print(count.number)
    else:
        count = Count.objects.create(user=user, song=song, number=1)
        print('no')
        # print(count.user)
        print(count.number)

    user.save()
    song.save()
    return HttpResponse(song.total_times_added)


def getusersongs(req, id):
    user = User.objects.get(id=id)
    allSongs = user.songs.all()
    songs = {}

    for song in allSongs:
        if Count.objects.filter(user=user, song=song).exists():
            count = Count.objects.get(user=user, song=song)
            song.count = count.number
        songs[song.id] = {'title': song.title, 'artist': song.artist, 'count': song.count}

    # serialized_songs = serializers.serialize('json', allSongs)
    return HttpResponse(json.dumps(songs), content_type='application/json', status=200)
def getOneSong(req, id):
    song = Song.objects.filter(id=id)
    serialized_song = serializers.serialize('json', song)
    return HttpResponse(serialized_song, content_type='application/json', status=200)

def getsongcount(req, id):
    usersWhoAdded = Count.objects.filter(song=id)
    users = {}
    for user in usersWhoAdded:
        thisUser = User.objects.get(id=user.id)
        users[thisUser.id] = {'id': thisUser.id, 'firstName': thisUser.firstName, 'lastName': thisUser.lastName, 'count': user.number}
    print(users)
    return HttpResponse(json.dumps(users), content_type='application/json', status=200)

def getOneUser(req, id):
    user = User.objects.filter(id=id)
    serialized_user = serializers.serialize('json', user)
    return HttpResponse(serialized_user, content_type='application/json', status=200)
