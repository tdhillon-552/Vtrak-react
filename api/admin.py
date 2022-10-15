from django.contrib import admin

from api.models import Vehicletable, Typetable, Statustable

admin.site.register(Vehicletable)
admin.site.register(Typetable)
admin.site.register(Statustable)