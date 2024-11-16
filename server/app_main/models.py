from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    address = models.CharField(max_length=255, blank=True)
    message = models.TextField()

    def __str__(self):
        return self.name