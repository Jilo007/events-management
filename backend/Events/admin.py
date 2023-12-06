from django.contrib import admin
from .models import Event,EventTicket

# Register your models here.
class EventsAdmin(admin.ModelAdmin):
     list_display=('id','name','description','event_date','event_duration_value','event_duration_unit','venue','organizer','banner','tickets')
     
admin.site.register(Event,EventsAdmin)

class EventTicketAdmin(admin.ModelAdmin):
     list_display=('id','ticket_no','event','ticket_type','quantity','payment_method','amount')
     
admin.site.register(EventTicket,EventTicketAdmin)

