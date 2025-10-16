from django.db import models

class Player(models.Model):
    player_name = models.CharField(max_length=200)
    score = models.IntegerField()
    isWinner = models.BooleanField(default = False)
    skiped = models.BooleanField(default = False) #à arrété de jouer

class Game(models.Model):
    name = models.CharField(max_length=200, default = 'name')
    turn = models.IntegerField()
    gameAsEnded = models.BooleanField(default = False)
