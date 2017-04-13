from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from reala_api.models import Parcel, Owner, Event
from reala_api.serializers import UserSerializer, GroupSerializer, ParcelSerializer, OwnerSerializer, EventSerializer, LeadSerializer
from django.shortcuts import render
from django.template import RequestContext


def index(request):
    context = {}
    print("loaded...")
    return render(request, 'index.html', context=context)


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class ParcelViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Parcel.objects.all()
    serializer_class = ParcelSerializer


class OwnerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer


class EventViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class LeadViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    def get_queryset(self):
        queryset = Owner.objects.all()
        return queryset

    serializer_class = LeadSerializer
