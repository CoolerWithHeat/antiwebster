from rest_framework import serializers
from .models import TrackedViews, FakeViews

class TrackedViewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrackedViews
        fields = ['id', 'language', 'viewer_id', 'ip_address', 'created_at']


class FakeViewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FakeViews
        fields = ['id', 'language', 'created_at']