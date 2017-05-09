import requests, os
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned

try:
    from reala.config import *
except:
    GEOLOC_KEY = os.environ['GEOLOC_KEY']

from reala_api.models import Parcel, Owner, Event
from django.utils import timezone


def get_parcel_geocode(formatted_address):
    """
    This uses Google's Geolocation API to validate address data.
    The 'GEOLOC_KEY' needs to be either ecplcitly given here or defined
    in reala/config.py as 'GEOLOC_KEY'

    :param formatted_address:  str address
    :return: a Parcel object
    """
    base_url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
    r = requests.get(
        "{}{}&key=".format(base_url, formatted_address, GEOLOC_KEY))

    try:
        api_data = r.json()['results'][0]
    except IndexError:
        return None

    # Construct the parcel_data dictionary
    parcel_data = {}
    for d in api_data['address_components']:
        if d['types'][0] == 'street_number':
            parcel_data['street_number'] = d['short_name']
        if d['types'][0] == 'route':
            parcel_data['route'] = d['short_name']
        if d['types'][0] == 'locality':
            parcel_data['city'] = d['short_name']
        if d['types'][0] == 'administrative_area_level_1':
            parcel_data['state'] = d['short_name']
        if d['types'][0] == 'postal_code':
            parcel_data['postal_code'] = d['short_name']

    parcel_data['formatted_address'] = api_data['formatted_address']
    parcel_data['lat'] = api_data['geometry']['location']['lat']
    parcel_data['lng'] = api_data['geometry']['location']['lng']

    parcel = None
    try:
        print("Querying for parcel.")
        parcel = Parcel.objects.get(formatted_address=parcel_data['formatted_address'])
        print("Found Parcel.  Returning.")
    except KeyError:
        print("No address found.")
        return None
    except MultipleObjectsReturned:
        print("There's more than one house with this address.  That's a problem.")
        return None
    except ObjectDoesNotExist:
        print("Couldn't find parcel.  Making it now.")
        parcel = Parcel()
        try:
            parcel.formatted_address = parcel_data['formatted_address']
            parcel.street_number = parcel_data['street_number']
            parcel.route = parcel_data['route']
            parcel.city = parcel_data['city']
            parcel.state = parcel_data['state']
            parcel.postal_code = parcel_data['postal_code']
            parcel.lat = parcel_data['lat']
            parcel.lng = parcel_data['lng']
            parcel.save()
        except KeyError:
            return None

    return parcel


def search_parcel(formatted_address):
    """
    Searches the database for the address.  If found, it is returned.  If not, it is created.
    :param formatted_address: string e.g., '123 Fake St, Buffalo NY 14225'
    :return: Parcel Object
    """

    queryset = Parcel.objects.all()

    try:
        print('Getting matching Parcel.')
        return queryset.get(formatted_address=formatted_address)
    except MultipleObjectsReturned:
        print("There's more than one matching house.")
        return None
    except ObjectDoesNotExist:
        print("Returning new Parcel Object.")
        return get_parcel_geocode(formatted_address)

    print("Something went wrong.")
    return None


def get_user_created_event(user, owner_id):
    """
    :param user:
    :param owner_id:
    :param today_only:
    :return:
    """
    try:
        owner = Owner.objects.get(pk=owner_id)
    except ObjectDoesNotExist:
        print("Owner doesn't exist.")
        return None

    queryset = Event.objects.all()
    if user.id is not None:
        queryset = queryset.filter(user=user, owner=owner)
    else:
        queryset = queryset.filter(user=None, owner=owner)
        user = None

    e = queryset.first()

    try:
        if e.occurred.date() >= timezone.now().date():
            print("Found recent event.")
            return e
        else:
            e = Event()
            e.user = user
            e.owner = owner
            return e
    except AttributeError:
        e = Event()
        e.user = user
        e.owner = owner
        return e

    return None
