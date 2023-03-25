from django.urls import re_path
from acornmoodtracker import views
from django.contrib import admin
from django.urls import include, path
urlpatterns=[
    re_path(r'^user/$',views.userApi),
    re_path(r'^user/([a-zA-Z0-9_.]*)$',views.userApi),
    re_path(r'^mood/$',views.moodApi),
    re_path(r'^mood/([a-zA-Z0-9_.]*)$',views.moodApi),
    re_path(r'^moods/([a-zA-Z0-9_.]*)$',views.moodsApi),
    re_path(r'^feeling/$',views.feelingApi),
    re_path(r'^feeling/([a-zA-Z0-9_.]*)$',views.feelingApi),
]