from django.db import models
from datetime import datetime, timezone
from django.utils.timezone import make_aware


class Statustable(models.Model):
    status = models.CharField(max_length=20)

    def __str__(self):
        return self.status


class Typetable(models.Model):
    """Type Of veh... SUV, Crown Vic, Motor etc."""
    type = models.CharField(max_length=20)

    def __str__(self):
        return self.type


class Vehicletable(models.Model):
    vehnum = models.CharField(max_length=3)
    vehtype = models.ForeignKey('Typetable', on_delete=models.PROTECT)
    is_lpr = models.BooleanField()
    isforpatrol = models.BooleanField()
    status = models.ForeignKey('Statustable', on_delete=models.PROTECT)
    is_active = models.BooleanField()
    datetaken = models.DateTimeField(default=datetime.now)
    callsigninuse = models.CharField(max_length=7, default=" ", blank=True)
