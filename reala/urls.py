from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from reala_api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'parcels', views.ParcelViewSet)
router.register(r'events', views.EventViewSet)
router.register(r'owners', views.OwnerViewSet)
router.register(r'leads', views.LeadViewSet, base_name='leads')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^api/', include(router.urls)),
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^accounts/', include('allauth.urls')),
]
