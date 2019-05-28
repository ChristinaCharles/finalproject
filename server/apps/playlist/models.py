from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
class UserManager(models.Manager):
    pass

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    songs = models.ManytoManyField(Song, related_name='users')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Song(models.Model):
    title = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    total_times_added = IntegerField()

class Count(models.Model):
    user = models.ForeignKey(User, related_name='counts')
    song = models.ForeignKey(Song, related_name='counts')
    number = IntegerField()

