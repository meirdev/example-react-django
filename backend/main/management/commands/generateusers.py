from django.core.management.base import BaseCommand, CommandError
from faker import Faker
from main.models import CustomUser


class Command(BaseCommand):
    def handle(self, *args, **options):
        fake = Faker()

        user = CustomUser(
            email="admin@example.com",
            first_name="Admin",
            last_name="Admin",
        )
        user.set_password("123456")
        user.save()

        for _ in range(100):
            try:
                user = CustomUser(
                    email=fake.email(),
                    first_name=fake.first_name(),
                    last_name=fake.last_name(),
                )
                user.set_password("123456")
                user.save()
            except Exception as err:
                print(err)
                pass
