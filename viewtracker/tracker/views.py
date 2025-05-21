from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import TrackedViews, FakeViews

LANGUAGE_MAP = {
    1: 'en',
    2: 'uz',
    3: 'ru',
}

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        return x_forwarded_for.split(',')[0]
    return request.META.get('REMOTE_ADDR')

@api_view(['POST'])
def get_views(request):
    viewer_id = request.data.get('viewer_id')
    language_id = request.data.get('language')

    if not viewer_id or not language_id:
        return Response({'error': 'viewer_id and language are required.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        language_id = int(language_id)
        language = LANGUAGE_MAP[language_id]
    except (ValueError, KeyError):
        return Response({'error': 'Invalid language ID.'}, status=status.HTTP_400_BAD_REQUEST)

    if not TrackedViews.objects.filter(viewer_id=viewer_id, language=language).exists():
        ip_address = get_client_ip(request)
        TrackedViews.objects.create(
            viewer_id=viewer_id,
            language=language,
            ip_address=ip_address
        )

    counts = {
        'en': (TrackedViews.objects.filter(language='en').count() + FakeViews.objects.filter(language='en').count()) + 23,
        'uz': (TrackedViews.objects.filter(language='uz').count() + FakeViews.objects.filter(language='uz').count()) + 71,
        'ru': TrackedViews.objects.filter(language='ru').count() + FakeViews.objects.filter(language='ru').count(),
    }

    return Response(counts, status=status.HTTP_200_OK)


@api_view(['GET'])
def detailed_data(request):
    result = {}

    for lang in ['en', 'uz', 'ru']:
        queryset = TrackedViews.objects.filter(language=lang)
        result[lang] = {
            'count': queryset.count(),
            'ips': [
                {
                    'ip': obj.ip_address,
                    'time': obj.created_at.strftime('%B %d, %Y')
                }
                for obj in queryset
            ]
        }

    return Response(result)

@api_view(['POST'])
def add_fake_view(request):
    language_id = request.data.get('language')

    if not language_id:
        return Response({'error': 'language is required.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        language_id = int(language_id)
        language = LANGUAGE_MAP[language_id]
    except (ValueError, KeyError):
        return Response({'error': 'Invalid language ID.'}, status=status.HTTP_400_BAD_REQUEST)

    FakeViews.objects.create(language=language)

    return Response({'message': 'Fake view added successfully.'}, status=status.HTTP_201_CREATED)