from django.db import models
import uuid
from django.db.models.signals import post_save,post_delete
from django.contrib.auth.models import User
# from .serializers import UserRegistrationSerializer

# Create your models here.

class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,null=True,blank=True)
    username = models.CharField(max_length=200,blank=True,null=True)
    first_name = models.CharField(max_length=200,blank=True,null=True)
    last_name = models.CharField(max_length=200,blank=True,null=True)
    email = models.EmailField(blank=True,null=True)
    gender = models.CharField(max_length=10,blank=True,null=True)
    contact_no = models.CharField(max_length=10,blank=True,null=True)
    current_address = models.TextField(max_length=500,blank=True,null=True)
    permanent_address = models.TextField(max_length=500,blank=True,null=True)
    profile_pic = models.ImageField(blank=True,null=True)
    created = models.DateTimeField(auto_now_add=True)
    p_id = models.UUIDField(default=uuid.uuid4,primary_key=True)

    def __str__(self):
        return str(self.username)
    

# def createProfile(sender, instance, created, **kwargs):
#     if created:
#         user = instance
#         profile = Profile.objects.create(
#             username = user.username,
#             email = user.email,
#         )

# post_save.connect(createProfile, sender = User)

def createProfile(sender, instance, created, **kwargs):
    if created:
        # If a new User is created, create a Profile for that User
        profile = Profile.objects.create(user=instance,username = instance.username, email=instance.email)

    # If an existing User is saved, update the Profile fields with the User's data
    instance.profile.save()


post_save.connect(createProfile, sender = User)

def deleteProfile(sender , instance, **kwargs):
    try:
        user = instance
        profile = Profile.objects.get(
            username = user.username,
            email = user.email,
            )
        profile.delete()
    except Profile.DoesNotExist:
        pass

post_delete.connect(deleteProfile,sender = User)