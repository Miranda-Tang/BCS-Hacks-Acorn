from django.shortcuts import render
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from acornmoodtracker.models import User, Mood, Feeling
from acornmoodtracker.serializers import UserSerializer, MoodSerializer, FeelingSerializer

# Create your views here.
@csrf_exempt
def userApi(request,uname=""):
    if request.method=='GET':
        users = User.objects.all()
        user_serializer = UserSerializer(users, many=True)
        return JsonResponse(user_serializer.data, safe=False)

    elif request.method =='POST':
        user_data = JSONParser().parse(request)
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add.", safe=False)
    
    elif request.method=='PUT':
        user_data = JSONParser().parse(request)
        user = User.objects.get(username = user_data['username_id'])
        user_serializer = UserSerializer(user, data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Updated Successfully!", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        user=User.objects.get(username=uname)
        user.delete()
        return JsonResponse("Deleted Successfully!", safe=False)

@csrf_exempt
def moodApi(request,id=0):
    if request.method == 'GET':
        moods = Mood.objects.all()
        mood_serializer = MoodSerializer(moods, many=True)
        return JsonResponse(mood_serializer.data, safe=False)

    elif request.method == 'POST':
        mood_data = JSONParser().parse(request)
        mood_serializer = MoodSerializer(data=mood_data)
        if mood_serializer.is_valid():
            mood_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add.", safe=False)
    
    elif request.method == 'PUT':
        mood_data = JSONParser().parse(request)
        mood = Mood.objects.get(moodID = id)
        mood_serializer = MoodSerializer(mood, data=mood_data)
        if mood_serializer.is_valid():
            mood_serializer.save()
            return JsonResponse("Updated Successfully!", safe=False)
        print(mood_serializer.errors)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        mood=Mood.objects.get(moodID=id)
        mood.delete()
        return JsonResponse("Deleted Successfully!", safe=False)

@csrf_exempt
def moodsApi(request,uname=""):
    if request.method == 'GET':
        moods = Mood.objects.filter(username=uname)
        mood_serializer = MoodSerializer(moods, many=True)
        return JsonResponse(mood_serializer.data, safe=False)

@csrf_exempt
def feelingApi(request,id=0):
    if request.method == 'GET':
        feelings = Feeling.objects.all()
        feeling_serializer = FeelingSerializer(feeling, many=True)
        return JsonResponse(Feeling_serializer.data, safe=False)

    elif request.method == 'POST':
        feeling_data = JSONParser().parse(request)
        feeling_serializer = FeelingSerializer(data=feeling_data)
        if feeling_serializer.is_valid():
            feeling_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add.", safe=False)
    
    elif request.method == 'PUT':
        feeling_data = JSONParser().parse(request)
        feeling = Feeling.objects.get(feelingID = id)
        feeling_serializer = FeelingSerializer(feeling, data=feeling_data)
        if feeling_serializer.is_valid():
            feeling_serializer.save()
            return JsonResponse("Updated Successfully!", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    
    elif request.method=='DELETE':
        feeling=Feeling.objects.get(feelingID=id)
        feeling.delete()
        return JsonResponse("Deleted Successfully!", safe=False)
