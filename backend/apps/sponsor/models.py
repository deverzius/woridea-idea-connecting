from django.db import models


class SponsorEvent(models.Model):
    name = models.TextField()
    description = models.TextField()
    amount = models.CharField(max_length=100)
    sponsorBenefits = models.TextField()

    def __str__(self):
        return """Sponsor Event"""


class SponsorPackage(models.Model):
    name = models.TextField()
    description = models.TextField()
    amount = models.CharField(max_length=100)
    sponsorBenefits = models.TextField()

    def __str__(self):
        return """Sponsor Package"""
