from django import forms
from .models import Book, Category

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
