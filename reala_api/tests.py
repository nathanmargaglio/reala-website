from django.test import TestCase
from reala_api.models import Parcel, Owner, Event
from django.contrib.auth.models import User, Group
from reala_api.helpers import get_parcel_geocode, search_parcel, get_user_created_event


# Create your tests here.

class ParcelTestCase(TestCase):
    def setUp(self):
        Parcel.objects.create(street_number='18',
                              route='Vera Ave',
                              city='Buffalo',
                              state='NY',
                              postal_code='14225')

        Parcel.objects.create(street_number='999',
                              route='Elam Ave',
                              city='Jamestown',
                              state='NY',
                              postal_code='14701')

        Parcel.objects.create(street_number='54',
                              route='Pine Rd',
                              city='Buffalo',
                              state='NY',
                              postal_code='14427')

        vera = Parcel.objects.get(route='Vera Ave')
        elam = Parcel.objects.get(route='Elam Ave')
        pine = Parcel.objects.get(route='Pine Rd')

    def test_get_parcel_function(self):
        """
        Makes sure we get our proper validated Parcel object back.
        """
        # In the Database Already
        parcel = get_parcel_geocode('18 Vera Ave, Buffalo, NY 14225')

        self.assertEqual(parcel.street_number, '18')
        self.assertEqual(parcel.route, 'Vera Ave')
        self.assertEqual(parcel.city, 'Buffalo')
        self.assertEqual(parcel.state, 'NY')
        self.assertEqual(parcel.postal_code, '14225')

        parcel = get_parcel_geocode('1600 Ampitheatre Pkwy Mountain View CA 94043')

        self.assertEqual(parcel.street_number, '1600')
        self.assertEqual(parcel.route, 'Amphitheatre Pkwy')
        self.assertEqual(parcel.city, 'Mountain View')
        self.assertEqual(parcel.state, 'CA')
        self.assertEqual(parcel.postal_code, '94043')

    def test_search_parcel_function(self):
        """
        #TODO: Fill this out.
        """
        parcel = search_parcel('18 Vera Ave, Buffalo, NY 14225')

        self.assertEqual(parcel.street_number, '18')
        self.assertEqual(parcel.route, 'Vera Ave')
        self.assertEqual(parcel.city, 'Buffalo')
        self.assertEqual(parcel.state, 'NY')
        self.assertEqual(parcel.postal_code, '14225')

        parcel = search_parcel('1600 Ampitheatre Pkwy Mountain View CA 94043')

        self.assertEqual(parcel.street_number, '1600')
        self.assertEqual(parcel.route, 'Amphitheatre Pkwy')
        self.assertEqual(parcel.city, 'Mountain View')
        self.assertEqual(parcel.state, 'CA')
        self.assertEqual(parcel.postal_code, '94043')

        parcel = search_parcel('Vera Ave, Buffalo, NY 14225')

        self.assertIsNone(parcel)

class EventTestCase(TestCase):


    def setUp(self):
        Owner.objects.create(first_name='Nathan',
                             last_name='Margaglio',
                             home=search_parcel('18 vera ave, buffalo, ny 14225'))
        self.user = User.objects.create(username='nathanmargaglio',
                                        email='nathanmargaglio@gmail.com')

    def test_get_user_created_event(self):
        e = get_user_created_event(self.user, '1')
        e.type = "new"
        print(e)

        e = get_user_created_event(self.user, '1')
        print(e)
