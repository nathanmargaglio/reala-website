from django.contrib.auth.models import User, Group
from rest_framework import serializers
from reala_api.models import Parcel, Owner, Event
from reala_api.helpers import search_parcel


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
            'id', 'contact', 'street_number', 'route', 'city', 'state', 'postal_code', 'lat', 'lon', 'swis',
            'assessment', 'frontage', 'depth', 'acres', 'year_built', 'beds', 'baths', 'fireplace', 'description',
            'school', 'notes')

    def create(self, validated_data):
        home_data = {}
        home_data['street_number'] = validated_data.pop('street_number')
        home_data['route'] = validated_data.pop('route')
        home_data['city'] = validated_data.pop('city')
        home_data['state'] = validated_data.pop('state')
        home_data['postal_code'] = validated_data.pop('postal_code')

        parcel = search_parcel(home_data)
        # TODO: Get the rest of the data in there
        return parcel


class ParcelCompactSerializer(serializers.ModelSerializer):
    street_number = serializers.CharField(allow_blank=True)
    route = serializers.CharField(allow_blank=True)
    city = serializers.CharField(allow_blank=True)
    state = serializers.CharField(allow_blank=True)
    postal_code = serializers.CharField(allow_blank=True)

    class Meta:
        model = Parcel
        fields = ('id', 'street_number', 'route', 'city', 'state', 'postal_code')


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'occurred', 'user', 'owner', 'type', 'details', 'notes')


class EventCompactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'occurred', 'user', 'type')


class OwnerSerializer(serializers.ModelSerializer):
    events = EventCompactSerializer(many=True, read_only=True)
    home = ParcelCompactSerializer()

    class Meta:
        model = Owner
        fields = ('id', 'first_name', 'last_name', 'events',
                  'phone_number', 'phone_verified', 'do_not_contact',
                  'email_address', 'age', 'gender', 'home')

    def create(self, validated_data):
        home_data = validated_data.pop('home')
        owner = Owner.objects.create(**validated_data)
        owner.home = search_parcel(home_data)
        owner.save()

        return owner

    def update(self, instance, validated_data):
        home_data = validated_data['home']
        parcel = search_parcel(home_data)
        instance.home = parcel
        instance.save()

        return instance
