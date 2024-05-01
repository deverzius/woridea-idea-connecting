from django.db import models


class SponsorPackage(models.Model):
    name = models.TextField()
    description = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    sponsorBenefits = models.TextField()

    def __str__(self):
        return """Sponsor Package"""