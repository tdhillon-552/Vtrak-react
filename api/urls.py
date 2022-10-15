from django.urls import path
from .views import GetVehs


urlpatterns = [
    path('getveh/', GetVehs.as_view())

]
