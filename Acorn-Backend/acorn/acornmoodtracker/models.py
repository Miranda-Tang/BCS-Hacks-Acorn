from django.db import models
from django.utils.timezone import now


# Create your models here.

class User(models.Model):

    username = models.CharField(max_length=90, primary_key=True)

    firstname = models.CharField(max_length=90)

    lastname = models.CharField(max_length=90)

    email = models.CharField(max_length=90)

    phone = models.CharField(max_length=90)

    @classmethod
    def get_default_pk(cls):
        User, created = cls.objects.get_or_create(
            username='admin', defaults=dict(firstname='admin', lastname='admin', email='admin@gmail.com',phone='not available'))
        return User.pk


SQUIRREL = (
    (0, 'Happy'),
    (1, 'Sad'),
    (2, 'Angry'),
    (3, 'Confused'),
    (4, 'Hopeful')
)

class Mood(models.Model):

    moodID = models.AutoField(primary_key = True)

    title = models.CharField(max_length=90)

    notes = models.TextField(max_length=2000)

    date = models.DateTimeField(default=now)

    squirrel = models.CharField(max_length=90, choices=SQUIRREL)

    username = models.ForeignKey(User, on_delete=models.CASCADE, default=User.get_default_pk)

    @classmethod
    def get_default_pk(cls):
        Mood, created = cls.objects.get_or_create(
            moodID=0, defaults=dict(title='Not Available', notes='Not Available'))
        return Mood.pk



class Feeling(models.Model):
    feelingID = models.AutoField(primary_key = True)

    title = models.CharField(max_length=90)

    moodID = models.ForeignKey(Mood, on_delete=models.CASCADE, default = Mood.get_default_pk)

