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
    street_number = serializers.CharField(read_only=True)
    route = serializers.CharField(read_only=True)
    city = serializers.CharField(read_only=True)
    state = serializers.CharField(read_only=True)
    postal_code = serializers.CharField(read_only=True)
    lat = serializers.CharField(read_only=True)
    lng = serializers.CharField(read_only=True)

    class Meta:
        model = Parcel
        fields = (
            'id', 'contact', 'formatted_address', 'street_number', 'route', 'city', 'state', 'postal_code', 'lat',
            'lng', 'swis', 'assessment', 'frontage', 'depth', 'acres', 'year_built', 'beds', 'baths', 'fireplace',
            'description', 'school', 'notes')

    def create(self, validated_data):
        parcel = search_parcel(validated_data.pop('formatted_address'))
        for attr, val in validated_data.items():
            setattr(parcel, attr, val)
        parcel.save()

        return parcel

    def update(self, instance, validated_data):
        # We don't let Parcel objects update address data
        # Since every address given exists, we want a new
        # Parcel instance to be created instead.
        parcel = search_parcel(validated_data.pop('formatted_address'))
        if parcel is not None and parcel.formatted_address != instance.formatted_address:
            return parcel

        for attr, val in validated_data.items():
            setattr(instance, attr, val)
        instance.save()

        return instance


class ParcelCompactSerializer(serializers.ModelSerializer):
    formatted_address = serializers.CharField(allow_blank=True)

    class Meta:
        model = Parcel
        fields = ('id', 'formatted_address')


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
    parcels = ParcelCompactSerializer(many=True)

    class Meta:
        model = Owner
        fields = ('id', 'first_name', 'last_name', 'parcels', 'events',
                  'phone_number', 'phone_verified', 'do_not_contact',
                  'email_address', 'age', 'gender', 'home')

    def create(self, validated_data):
        home_data = validated_data.pop('home')
        owner = Owner.objects.create(**validated_data)
        owner.home = search_parcel(home_data['formatted_address'])
        owner.home.contact = owner
        owner.home.save()
        owner.save()

        return owner

    def update(self, instance, validated_data):
        home_data = validated_data['home']
        parcel = search_parcel(home_data['formatted_address'])
        instance.home = parcel
        parcel.contact = instance
        parcel.save()
        instance.save()

        return instance


class LeadSerializer(serializers.ModelSerializer):
    home = ParcelCompactSerializer()
    events = EventCompactSerializer(many=True, read_only=True)

    class Meta:
        model = Owner
        fields = ('id', 'first_name', 'last_name', 'home', 'events')

    def create(self, validated_data):
        home_data = validated_data.pop('home')
        owner = Owner.objects.create(**validated_data)
        owner.home = search_parcel(home_data['formatted_address'])
        owner.home.contact = owner
        owner.home.save()
        owner.save()

        return owner

    def update(self, instance, validated_data):
        home_data = validated_data['home']
        parcel = search_parcel(home_data['formatted_address'])
        instance.home = parcel
        parcel.contact = instance
        parcel.save()
        instance.save()

        return instance
