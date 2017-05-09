from django.contrib.auth.models import User, Group
from rest_framework import serializers
from reala_api.models import Parcel, Owner, Event
from reala_api.helpers import search_parcel, get_user_created_event
from django.utils import timezone


class UserSerializer(serializers.ModelSerializer):
    """
    Simple User Serializer for read/write API
    """

    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.ModelSerializer):
    """
    Simple Group Serializer for read/write API
    """

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
    # owner = serializers.CharField(required=True)

    class Meta:
        model = Event

        fields = ('id', 'occurred', 'user', 'owner', 'type', 'details', 'notes',
                  'claimed', 'called', 'mailed', 'social', 'other')

    def create(self, validated_data):
        user = self.context['request'].user
        owner = validated_data['owner']

        occurred = timezone.now()
        etype = 'Contact'
        if 'occurred' in validated_data:
            occurred = validated_data['occurred']
        if 'type' in validated_data:
            etype = validated_data['type']

        e = get_user_created_event(user, owner.id)
        e.occurred = occurred
        e.type = etype

        if 'details' in validated_data:
            e.details = validated_data['details']
        if 'notes' in validated_data:
            e.notes = validated_data['notes']

        if 'claimed' in validated_data:
            e.claimed = validated_data['claimed']
        if 'called' in validated_data:
            e.called = validated_data['called']
        if 'mailed' in validated_data:
            e.mailed = validated_data['mailed']
        if 'social' in validated_data:
            e.social = validated_data['social']
        if 'other' in validated_data:
            e.other = validated_data['other']

        e.save()
        return e


class EventCompactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'occurred', 'user', 'type')


class OwnerSerializer(serializers.ModelSerializer):
    events = EventCompactSerializer(many=True, read_only=True)
    home = ParcelCompactSerializer()
    parcels = ParcelCompactSerializer(many=True, read_only=True)

    gender = serializers.CharField(allow_blank=True)
    phone_number = serializers.CharField(allow_blank=True)
    email_address = serializers.CharField(allow_blank=True)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        """
        user = self.context['request'].user
        owner_id = args[0].id
        e = get_user_created_event(user, owner_id)
        e.type = "Contact"
        e.occurred = timezone.now()
        e.save()
        """

    class Meta:
        model = Owner
        fields = ('id', 'first_name', 'last_name', 'parcels', 'events',
                  'phone_number', 'phone_verified', 'do_not_contact',
                  'email_address', 'age', 'gender', 'home')

    def create(self, validated_data):
        home_data = validated_data.pop('home')
        owner = Owner.objects.create(**validated_data)
        owner.save()
        owner.home = search_parcel(home_data['formatted_address'])
        if owner.home is not None:
            owner.home.contact = owner
            owner.home.save()
        owner.save()

        return owner

    def update(self, instance, validated_data):
        home_data = validated_data['home']
        parcel = search_parcel(home_data['formatted_address'])
        instance.home = parcel

        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.phone_verified = validated_data.get('phone_verified', instance.phone_verified)
        instance.do_not_contact = validated_data.get('do_not_contact', instance.do_not_contact)
        instance.email_address = validated_data.get('email_address', instance.email_address)
        instance.age = validated_data.get('age', instance.age)
        instance.gender = validated_data.get('gender', instance.gender)

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
