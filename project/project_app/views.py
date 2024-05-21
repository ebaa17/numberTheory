from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *
from .forms import BookForm, CategoryForm, CheckoutForm

# Create your views here.

def view(request):
    search = Book.objects.all()
    title = None
    if 'search-name' in request.GET:
        title = request.GET['search-name']
        if title:
            search = search.filter(name__icontains=title)
            # search = Book.objects.filter(name=title)
        
    context = {
        'category': Category.objects.all(),
        'books': search,
        # 'category': Category.objects.all(),
        # 'books': search,
    }
    return render(request, 'pages/views.html', context)

def add_book(request):
    if request.method == 'POST':
        if 'add_book' in request.POST:
            add_book = BookForm(request.POST, request.FILES) # request.FILES  to save images
            if add_book.is_valid():
                add_book.save()

        elif 'add_category' in request.POST:
            add_category = CategoryForm(request.POST)
            if add_category.is_valid():
                add_category.save()
        
    context = {
        'form': BookForm(),
        'formCategory': CategoryForm(),
    }
    return render(request, 'pages/add_book.html', context)

def cart(request):
    if request.method == 'POST':
        form = CheckoutForm(request.POST)
        if form.is_valid():
            # form.save()  # Comment out this line
            cardholder_name = form.cleaned_data.get('cardholder_name')
            messages.success(request, f'Thank you, {cardholder_name}!')
            return redirect('account')  # redirect to the accountUser page
    return render(request, 'pages/cart.html')

def main(request):
    return render(request, 'pages/main.html')

def details(request, id):
    bookID = Book.objects.get(id=id)
    context = {
        'book': bookID
    }
    return render(request, 'pages/details.html', context)


def account(request):
    #get username
    #get profile picture
    context = { #will be updated after setting a model for acc data
        # 'name' : 'default'
        #'username' : username
        #'profilepic' : profilepic
    }
    return render(request, 'pages/accountUser.html', context)