from django.db import models
from django.db.models import fields
from .field_classes import DateRange
import datetime


class DateRangeField(models.JSONField):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
    
    def from_db_value(self, value, expression, connection):
        if value is None:
            return value
        return DateRange(value["start"], value["end"])

    def to_python(self, value):
        if isinstance(value, DateRange):
            return value
        if value is None:
            return value

        return DateRange(value["start"], value["end"])

fields.DateRangeField = DateRangeField
