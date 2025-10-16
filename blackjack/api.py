from ninja import NinjaAPI
from ninja import Schema

api = NinjaAPI()

class Player(Schema):
    player_name : str
    score : int
    skiped : bool
    isWinner: bool


class Game(Schema):
    id : int
    name : str
    turn : int
    gameAsEnded : bool

@api.post("/players", response=Player)
def create_player(request, data: Player):
    player = Player.objects.create(**data.dict())
    return player

@api.post("/games", response=Game)
def create_game(request, data: Game):
    game = Game.objects.create(**data.dict())
    return game