from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User, Group

# Create your models here.

class Parcel(models.Model):
    # Datapoint representing a piece of inventory (e.g., a house)

    # Meta Info
    created = models.DateTimeField(auto_now_add=True)
    contact = models.ForeignKey('Owner', related_name='parcels', null=True, on_delete=models.CASCADE)

    # Location Info
    formatted_address = models.CharField(max_length=128, default=None, null=True)
    street_number = models.CharField(max_length=16, default=None, null=True)
    route = models.CharField(max_length=32, default=None, null=True)
    city = models.CharField(max_length=32, default=None, null=True)
    state = models.CharField(max_length=16, default=None, null=True)
    postal_code = models.CharField(max_length=32, default=None, null=True)
    lat = models.FloatField(default=None, null=True)
    lng = models.FloatField(default=None, null=True)

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

    occurred = models.DateTimeField(default=None, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    owner = models.ForeignKey(Owner, related_name='events', on_delete=models.CASCADE, null=True)
    ownerid = models.IntegerField(null=True)
    # Organizational Booleans
    claimed = models.BooleanField(default=False)
    called = models.BooleanField(default=False)
    mailed = models.BooleanField(default=False)
    social = models.BooleanField(default=False)
    other = models.BooleanField(default=False)

    type = models.CharField(max_length=32, null=True)
    details = models.CharField(max_length=32, null=True)
    notes = models.TextField(default=None, null=True)

    def __str__(self):
        if self.type is not None:
            return self.type
        else:
            return "Undefined Event"

    class Meta:
        ordering = ['-occurred']

