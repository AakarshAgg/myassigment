from django.contrib import admin
from .models import Todo

class TodoAdmin(admin.ModelAdmin):
    list_display = ('heading','subheading' , 'description')

# Register your models here.

admin.site.register(Todo, TodoAdmin)