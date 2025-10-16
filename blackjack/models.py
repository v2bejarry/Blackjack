from django.db import models

class Player(models.Model):
    player_name = models.CharField(max_length=200)
    text_field = models.TextField()
    score = models.IntegerField()
    skiped = models.BooleanField(default = False) #à arrété de jouer

class Game(models.Model):
    name = models.CharField(max_length=200, default = 'name')
    turn = models.IntegerField()
    gameEnd = models.BooleanField(default = False)
