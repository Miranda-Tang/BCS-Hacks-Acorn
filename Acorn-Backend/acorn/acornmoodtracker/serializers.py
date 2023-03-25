from rest_framework import serializers
from acornmoodtracker.models import User, Mood, Feeling


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username',
                  'firstname',
                  'lastname',
                  'email',
                  'phone')


class MoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mood
        fields = ('moodID',
                  'title',
                  'notes',
                  'date',
                  'squirrel',
                  'username')
        
class FeelingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feeling
        fields = ( 
                  'feelingID',
                  'moodID',
                  'title', 
                  )

