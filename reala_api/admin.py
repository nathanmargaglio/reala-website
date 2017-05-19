from django.contrib import admin
from reala_api.models import Parcel, Owner, Event

# Register your models here.
admin.site.register(Parcel)
admin.site.register(Owner)
admin.site.register(Event)