from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from reala_api.models import Parcel, Owner, Event
from reala_api.serializers import UserSerializer, GroupSerializer, ParcelSerializer, OwnerSerializer, EventSerializer, LeadSerializer
from django.shortcuts import render
from django.shortcuts import render_to_response, redirect, render
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.decorators import login_required
from django.template import RequestContext


#@login_required(login_url='/accounts/login')
def index(request):
    context = {}
    print("loaded...")
    return render(request, 'index.html', context=context)


def login(request):
    return render_to_response('login.html', context=RequestContext(request))


def logout(request):
    auth_logout(request)
    return redirect('/')


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

    def get_queryset(self):
        queryset = Event.objects.all()
        owner = self.request.query_params.get('owner', None)
        if owner is not None:
            queryset = queryset.filter(owner__id=owner)

        return queryset

    queryset = Event.objects.all()
    serializer_class = EventSerializer


class LeadViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    def get_queryset(self):
        queryset = Owner.objects.all().order_by('pk')
        queryset = queryset.filter(home__isnull=False)
        postal_code = self.request.query_params.get('postal_code', None)
        if postal_code is not None:
            queryset = queryset.filter(home__postal_code=postal_code)

        return queryset

    serializer_class = LeadSerializer
