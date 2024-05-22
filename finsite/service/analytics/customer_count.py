from finsite.models import Customer


def customer_count():
    return {
        "total_customer": Customer.objects.count(),
        "total_man_customer": Customer.objects.filter(gender=True).count(),
        "total_woman_customer": Customer.objects.filter(gender=False).count(),
    }
