from django.contrib import admin

# Register your models here.
from .models import Libri, Autori

admin.site.register(Libri)
admin.site.register(Autori)
