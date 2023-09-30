from django.db import models
import uuid

# Create your models here.
class Prediction(models.Model):
    p_id=models.UUIDField(default=uuid.uuid4,primary_key=True,null=False,blank=False)
    symptom=models.CharField(max_length=100,blank=True,null=True)
    description=models.CharField(max_length=1000,blank=True,null=True)
    created=models.DateTimeField(auto_now_add=True,blank=True,null=True)

    def __str__(self):
        return self.symptom