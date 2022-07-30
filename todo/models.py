from django.db import models

# Create your models here.

class Todo(models.Model):
    heading = models.CharField(max_length=30)
    subheading = models.CharField(max_length=30)
    description = models.TextField(max_length=30)
   

    def _str_(self):
        return self.heading