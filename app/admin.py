from django.contrib import admin

# Register your models here.
from .models import Logins, User

admin.site.register(User)
admin.site.register(Logins)