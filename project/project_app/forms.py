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
        fields = [
            'cardholder_name',
            'card_number',
            'expiration_date',
            'cvv'
        ]
        widgets = {
            # 'title': forms.TextInput(attrs={'class': 'form-control'})
            'cardholder_name': forms.TextInput(attrs={'size': '17', 'type': 'text', 'class': 'form-control form-control-lg', 'placeholder': "Cardholder's Name", 'id': 'typeName'}),
            'card_number': forms.NumberInput(attrs={'maxlength': '19', 'minlength': '19', 'size': '17', 'type': 'text', 'class': 'form-control form-control-lg', 'placeholder': '1234 5678 9012 3457', 'id': 'typeTextCardnum'}),
            # 'card_type': forms.Select(),
            'expiration_date': forms.DateInput(attrs={'maxlength': '7', 'minlength': '7', 'size': '7', 'type': 'text', 'class': 'form-control form-control-lg', 'placeholder': 'MM/YYYY', 'id': 'typeExp'}),
            'cvv': forms.NumberInput(attrs={'maxlength': '3', 'minlength': '3', 'size': '1', 'type': 'password', 'class': 'form-control form-control-lg typeText', 'placeholder': '&#9679;&#9679;&#9679;', 'id': 'typeText'}),
        }
