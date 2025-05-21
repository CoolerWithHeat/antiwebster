
from tracker.views import get_views, detailed_data, add_fake_view
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('getviews/', get_views, name='get_views'),
    path('detaileddata/', detailed_data, name='detailed_data'),
    path('addfakeview/', add_fake_view, name='add_fake_view'),
]