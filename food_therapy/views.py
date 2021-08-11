from django.shortcuts import render

# Create your views here.
def dashboard(request):
    return render(request, 'food_therapy/dashboard.html')

def event_categories(request):
    return render(request, 'food_therapy/event_categories.html')

def event_create(request):
    return render(request, 'food_therapy/event_create.html')

def event_forum(request):
    return render(request, 'food_therapy/event_forum.html')

def event(request):
    return render(request, 'food_therapy/event.html')

def food_browse(request):
    return render(request, 'food_therapy/food_browse.html')

def food_detail(request):
    return render(request, 'food_therapy/food_detail.html')

def food_list(request):
    return render(request, 'food_therapy/food_list.html')

def future_food_event(request):
    return render(request, 'food_therapy/future_food_event.html')

