import requests
from reala import config, settings
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned

try:
    from reala_api.models import Parcel, Owner, Event
except:
    import django
    from django.conf import settings

    settings.configure(DEBUG=True)
    django.setup()
    from reala_api.models import Parcel, Owner, Event


def get_parcel_geocode(data):
    """
    This uses Google's Geolocation API to validate address data.
    The 'GEOLOC_KEY' needs to be either ecplcitly given here or defined
    in reala/config.py as 'GEOLOC_KEY'

    :param data:    a dictionary which must include 'street_number', 'route', 'state',
                    and either 'postal_code' and/or 'postal_code'
    :return: a Parcel object
    """
    base_url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
    r = requests.get(
        "{}{}+{}+{}+{}+{}&key=".format(base_url, data['street_number'], data['route'], data['city'], data['state'],
                                       data['postal_code'], config.GEOLOC_KEY))
    api_data = r.json()['results'][0]

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

    queryset = Parcel.objects.all()
    queryset = queryset.filter(street_number=parcel_data['street_number'])
    queryset = queryset.filter(route=parcel_data['route'])
    queryset = queryset.filter(city=parcel_data['city'])
    queryset = queryset.filter(state=parcel_data['state'])
    queryset = queryset.filter(postal_code=parcel_data['postal_code'])

    parcel = Parcel()
    try:
        print("Querying for parcel.")
        parcel = queryset.get()
        print("Found Parcel.  Returning.")
    except MultipleObjectsReturned:
        print("There's more than one house with these specs.  That's a problem.")
    except ObjectDoesNotExist:
        print("Couldn't find parcel.  Making it now.")
        parcel = Parcel()
        parcel.street_number = parcel_data['street_number']
        parcel.route = parcel_data['route']
        parcel.city = parcel_data['city']
        parcel.state = parcel_data['state']
        parcel.postal_code = parcel_data['postal_code']
        parcel.save()

    return parcel


def search_parcel(data):
    """
    Searches the database for the address.  If found, it is returned.  If not, it is created.
    :param data: Address Dictionary
    :return: Parcel Object
    """

    if data['street_number'] == '' or data['route'] == '' or data['city'] == '' or not (
            data['state'] != '' or data['postal_code'] != ''):
        print('Missing a required field.')
        return None

    queryset = Parcel.objects.all()
    queryset = queryset.filter(street_number=data['street_number'])
    queryset = queryset.filter(route=data['route'])
    queryset = queryset.filter(city=data['city'])
    queryset = queryset.filter(state=data['state'])
    queryset = queryset.filter(postal_code=data['postal_code'])

    try:
        print('Found matching Parcel.')
        return queryset.get()
    except MultipleObjectsReturned:
        print("There's more than one house.")
        return None
    except ObjectDoesNotExist:
        print("Returning new Parcel Object.")
        return get_parcel_geocode(data)

    print("Something went wrong.")
    return None
