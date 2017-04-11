from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User, Group

# Create your models here.

class Parcel(models.Model):
    # Datapoint representing a piece of inventory (e.g., a house)

    # Meta Info
    created = models.DateTimeField(auto_now_add=True)
    contact = models.ForeignKey('Owner', null=True, on_delete=models.CASCADE)

    # Location Info
    street_number = models.CharField(max_length=16)
    route = models.CharField(max_length=32)
    city = models.CharField(max_length=32)
    state = models.CharField(max_length=16)
    postal_code = models.CharField(max_length=32)
    lat = models.FloatField(default=None, null=True)
    lon = models.FloatField(default=None, null=True)

    # Features
    swis = models.CharField(max_length=32, default=None, null=True)
    assessment = models.IntegerField(default=None, null=True)
    frontage = models.FloatField(default=None, null=True)
    depth = models.FloatField(default=None, null=True)
    acres = models.FloatField(default=None, null=True)
    year_built = models.IntegerField(default=None, null=True)
    beds = models.FloatField(default=None, null=True)
    baths = models.FloatField(default=None, null=True)
    fireplace = models.FloatField(default=None, null=True)
    description = models.CharField(max_length=64, default=None, null=True)
    school = models.CharField(max_length=64, default=None, null=True)
    notes = models.TextField(default=None, null=True)

    def __str__(self):
        return self.street_number + " " + self.route


class Owner(models.Model):
    # Datapoint representing a parcel owner (i.e., contact info)

    # Meta Info
    created = models.DateTimeField(auto_now_add=True)

    # Contact Info
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    home = models.ForeignKey(Parcel, null=True)
    phone_number = models.CharField(max_length=32, null=True)
    phone_verified = models.BooleanField(default=False)
    do_not_contact = models.BooleanField(default=False)
    email_address = models.CharField(max_length=64, default=None, null=True)

    # Features
    age = models.IntegerField(default=None, null=True)
    gender = models.CharField(max_length=16, default=None, null=True)
    notes = models.TextField(default=None, null=True)

    def __str__(self):
        return self.first_name + " " + self.last_name


class Event(models.Model):
    created = models.DateTimeField(auto_now_add=True)

    occurred = models.DateTimeField(null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    owner = models.ForeignKey(Owner, related_name='events', on_delete=models.CASCADE, null=True)
    type = models.CharField(max_length=32, null=True)
    details = models.CharField(max_length=32, null=True)
    notes = models.TextField(default=None, null=True)

    def __str__(self):
        return self.type
