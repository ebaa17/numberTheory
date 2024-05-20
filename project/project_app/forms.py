from django import forms
from .models import Book, Category, Checkout

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ['name']
        widgets = {
            'name': forms.TextInput(),
        }

class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = '__all__'
      
        widgets = {
            'category': forms.Select(),
            'status': forms.Select(),
            'price': forms.NumberInput(),
            'id': forms.NumberInput(),
            'img': forms.FileInput(),
            # 'img': forms.FilePathField(),
        }

class CheckoutForm(forms.ModelForm):
    class Meta:
        model = Checkout
        fields = '__all__'
        widgets = {
            'cardholder_name': forms.TextInput(),
            'card_number': forms.TextInput(),
            'card_type': forms.Select(),
            'expiration_date': forms.DateInput(),
            'cvv': forms.TextInput(),
        }