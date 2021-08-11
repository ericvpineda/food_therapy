from django.shortcuts import render
from django.views.decorators import gzip
from django.http import StreamingHttpResponse

import uuid
import cv2
import threading

# Create your views here.
# @gzip.gzip_page
# def video_feed(request):
#     return StreamingHttpResponse(gen(VideoCamera()),content_type="multipart/x-mixed-replace;boundary=frame")

def dashboard(request):
    return render(request, 'food_therapy/dashboard.html')


def event_categories(request):
    return render(request, 'food_therapy/event_categories.html')

def event_create(request):
    return render(request, 'food_therapy/event_create.html')

def event_forum(request):
    return render(request, 'food_therapy/event_forum.html')

def event(request, id):
    return render(request, 'food_therapy/event.html', {
        "uid" : id
    })

# note: remove both uid later 
def event_host(request):
    return render(request, 'food_therapy/event_host.html', {
        "uid" : str(uuid.uuid4())
    })

def event_join(request):
    return render(request, 'food_therapy/event_join.html')

def food_browse(request):
    return render(request, 'food_therapy/food_browse.html')

def food_detail(request):
    return render(request, 'food_therapy/food_detail.html')

def food_list(request):
    return render(request, 'food_therapy/food_list.html')

def title(request):
    return render(request, 'food_therapy/title.html')




