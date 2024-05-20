from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Book(models.Model):
    status_book = [
        ('available', 'available'),
        ('borrowed', 'borrowed'),
        ('sold', 'sold')
    ]
    name = models.CharField(max_length=100, verbose_name='Book Name')
    price = models.DecimalField(max_digits=6, decimal_places=2, verbose_name='Price')
    descritption = models.TextField(verbose_name='Description')
    id = models.IntegerField(verbose_name='Book ID', primary_key=True)
    author = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    img = models.ImageField(upload_to='photos/%y/%m/%d', null=True, blank=True)
    available = models.BooleanField(default=True)
    status = models.CharField(max_length=50, choices=status_book)

    def __str__(self):
        return self.name
    
    # class Meta:
    #     verbos_name = 'Book'
    #     verbose_name_plural = 'Books'
    #     ordering = ['name']


class Checkout(models.Model):
    CARD_TYPE_CHOICES = [
        ('Visa', 'Visa'),
        ('MasterCard', 'MasterCard'),
        ('amex', 'amex'),
        ('payPal', 'payPal')
    ]
    cardholder_name = models.CharField(max_length=255)
    card_number = models.CharField(max_length=19)
    card_type = models.CharField(max_length=10, choices=CARD_TYPE_CHOICES)
    expiration_date = models.DateField()
    cvv = models.CharField(max_length=3)

    def __str__(self):
        return self.cardholder_name
    
    class Meta:
        verbose_name = 'Checkout'
        verbose_name_plural = 'Checkouts'
        ordering = ['cardholder_name']
