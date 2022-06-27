from django.db import models
from uuid import uuid4
from hashlib import md5





def makehash():
    return  md5(str(uuid4()).encode('utf-8')).hexdigest()

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=200)


class Logins(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    login_time = models.DateTimeField(auto_now_add=True)
    token = models.CharField(max_length=200, default=makehash)