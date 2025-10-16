from ninja import NinjaAPI, Shema

api = NinjaAPI()

@api.get("/add")
def add(request, a: int, b: int):
    return {"result": a + b}
     
urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", api.urls),
]