from finsite.models import Employee


def get_employee_salaries():
    return Employee.objects.all().values("surname", "name", "patronymic", "salary")