from django.contrib.auth.models import User, Group
from rest_framework import serializers
from reala_api.models import Parcel, Owner, Event


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class ParcelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parcel
        fields = (
        'id', 'contact', 'street_number', 'route', 'city', 'state', 'postal_code', 'lat', 'lon', 'swis', 'assessment',
        'frontage', 'depth', 'acres', 'year_built', 'beds', 'baths', 'fireplace', 'description', 'school', 'notes')

class EventCompactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'occurred', 'user', 'type')


class OwnerSerializer(serializers.ModelSerializer):
    events = EventCompactSerializer(many=True, read_only=True)
    class Meta:
        model = Owner
        fields = ('id', 'first_name', 'last_name', 'events', 'home', 'phone_number', 'phone_verified', 'do_not_contact', 'email_address', 'age', 'gender')


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'occurred', 'user', 'owner', 'type', 'details', 'notes')
