from django.contrib.auth.models import User, Group
from rest_framework import serializers
from reala_api.models import Parcel, Owner, Event


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')



class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class ParcelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Parcel
        fields = (
        'id', 'contact', 'street_number', 'route', 'city', 'state', 'postal_code', 'lat', 'lon', 'swis', 'assessment',
        'frontage', 'depth', 'acres', 'year_built', 'beds', 'baths', 'fireplace', 'description', 'school', 'notes')


class OwnerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Owner
        fields = ('id', 'first_name', 'last_name', 'home', 'phone_number', 'phone_verified', 'do_not_contact', 'email_address', 'age', 'gender')


class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'occurred', 'user', 'parcel', 'type', 'details', 'notes')
