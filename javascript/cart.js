let cart = [];

function addToCart(id, name, price, img, category) {

    // Check if the book is already in the cart
    let existingBook = cart.find(book => book.id == id);

    if (existingBook) {
        existingBook.quantity++;
    } else {
        // If the book is not in the cart, add it with a quantity of 1
        let book = {id, name, price, img, category, quantity: 1};
        cart.push(book);
    }
    // Store the cart data in localStorage
    localStorage.setItem('cart_cont', JSON.stringify(cart));

    updateCart();
}

function updateCart() {
    let cartDisplay = document.getElementById('cart_cont');

    // Get the cart data from localStorage
    let cart = JSON.parse(localStorage.getItem('cart_cont'));

    // Clear the current cart display
    cartDisplay.innerHTML = '';

    let totalPrice = 0;

    // Add each book in the cart to the display
    //for (let i = 0; i < cart.length; i++){
    cart.forEach((book, i) => {
        let div = document.createElement('div');
        div.className = 'cart_item row mb-4 d-flex justify-content-between align-items-center';
        div.id = 'cart_item' + cart[i].id;

        // Create a new button element for deleting the book
        let del = document.createElement('div');
        del.className = 'col-md-1 col-lg-1 col-xl-1 text-end';
        let button = document.createElement('button');
        button.innerHTML = `<i class="fas fa-times"></i>`;
        button.onclick = function() {
            cart.splice(i, 1);
            localStorage.setItem('cart_cont', JSON.stringify(cart));
            updateCart();
        };

        del.appendChild(button);
        //Buttons
        //Div of buttons
        let divButtons = document.createElement('div');
        divButtons.setAttribute('class', 'col-md-3 col-lg-3 col-xl-2 d-flex');
        //Minus Button
        let minusBtn = document.createElement('button');
        minusBtn.setAttribute('data-mdb-button-init', '');
        minusBtn.setAttribute('data-mdb-ripple-init', '');
        minusBtn.setAttribute('class', 'btn btn-link px-2');
        var minusIcon = document.createElement('i');
        minusIcon.setAttribute('class', 'fas fa-minus');
        minusBtn.appendChild(minusIcon);
        minusBtn.onclick = function() {
            // let book = cart.find(book => book.id == cart[i].id);
            book.quantity--;
            // console.log(book.quantity);
            if (book.quantity == 0) {
                // cart = cart.filter(book => book.id != cart[i].id);
                cart.splice(i, 1);
            }
            // document.getElementById('quantity' + cart[i].id).value = book.quantity;
            document.getElementById('quantity' + cart[i].id).textContent = book.quantity;
            localStorage.setItem('cart_cont', JSON.stringify(cart));
            updateCart();
        }
        //Plus Button
        let plusBtn = document.createElement('button');
        plusBtn.setAttribute('data-mdb-button-init', '');
        plusBtn.setAttribute('data-mdb-ripple-init', '');
        plusBtn.setAttribute('class', 'btn btn-link px-2');
        var plusIcon = document.createElement('i');
        plusIcon.setAttribute('class', 'fas fa-plus');
        plusBtn.appendChild(plusIcon);
        plusBtn.onclick = function() {
            // let book = cart.find(book => book.id == cart[i].id);

            book.quantity++;
            // console.log(book.quantity);

            document.getElementById('quantity' + cart[i].id).textContent = book.quantity;
            
            localStorage.setItem('cart_cont', JSON.stringify(cart));
            updateCart();
        }
        //quantity control
        // let quntyInput = document.createElement('input');
        // quntyInput.setAttribute('id', 'quantity' + cart[i].id);
        // quntyInput.setAttribute('minlength', '1');
        // quntyInput.setAttribute('name', 'quantity');
        // quntyInput.setAttribute('value', '1');
        // quntyInput.setAttribute('type', 'text');
        // quntyInput.setAttribute('class', 'form-control form-control-sm');
        // quntyInput.setAttribute('placeholder', 'quantity');
        let quntyDiv = document.createElement('div');
        quntyDiv.setAttribute('id', 'quantity'+cart[i].id);
        quntyDiv.setAttribute('name', 'quantity');
        quntyDiv.setAttribute('class', 'form-control form-control-sm');
        quntyDiv.textContent = cart[i].quantity;
        
        divButtons.appendChild(minusBtn);
        divButtons.appendChild(quntyDiv);
        divButtons.appendChild(plusBtn);
        
        //div of price of book
        let divPrice = document.createElement('div');
        divPrice.setAttribute('class', 'col-md-3 col-lg-2 col-xl-2 offset-lg-1');
        let h6 = document.createElement('h6');
        h6.setAttribute('class', 'mb-0');
        h6.textContent = '$ ' + cart[i].price;
        divPrice.appendChild(h6);
        // <!-- onclick="this.parentNode.querySelector('input[type=number]').stepDown()"-->
        // <!--  onclick="this.parentNode.querySelector('input[type=number]').stepUp()" -->
        div.innerHTML = `
        <div class="col-md-2 col-lg-2 col-xl-2">
            <img src="${cart[i].img}" class="img-fluid rounded-3 cart_img" alt="${cart[i].name}" style="width: 65px">
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
            <h6 class="text-muted cart_category">${cart[i].category}</h6>
            <h6 class="text-black mb-0 cart_name">${cart[i].name}</h6>
        </div>`;

        div.appendChild(divButtons);
        div.appendChild(divPrice);
        div.appendChild(del);
        cartDisplay.appendChild(div);

        totalPrice += cart[i].price * cart[i].quantity;

        if(i != cart.length-1){
            let hr = document.createElement('hr');
            hr.className = 'my-4';
            cartDisplay.appendChild(hr);
        }
    });
    
    if (cart.length === 0) {
        cartDisplay.innerHTML = "<p class='empty'>Your books cart is empty!</p>";
        // cart = [];
        // localStorage.setItem('cart_cont', JSON.stringify(cart));
        // updateCart();
    }

    // Display the total number of items and total price
    let totalItems = document.getElementById('cart_number');
    var totalQuantity = 0;
    cart.forEach(item => {
        totalQuantity += item.quantity;
    });
    totalItems.textContent = totalQuantity;
    let DisplaytotalPrice = document.getElementById('cart_price');
    DisplaytotalPrice.textContent = totalPrice + ' LE';
}

// Function to decrease the quantity of a book in the cart
// function cart_minus(id, price) {
//     // Find the book in the cart
//     let book = cart.find(book => book.id == id);

//     // Decrease the quantity of the book
//     book.quantity--;

//     // If the quantity is 0, remove the book from the cart
//     if (book.quantity == 0) {
//         cart = cart.filter(book => book.id != id);
//     }
//     else {
//         // Update the value of the input element
//         document.getElementById('quantity' + id).value = book.quantity;
//         document.getElementById('quantity' + id).textContent = book.quantity;
//     }

//     // Update the cart data in localStorage
//     localStorage.setItem('cart_cont', JSON.stringify(cart));

//     // Update the cart display
//     updateCart();
// }

// // Function to increase the quantity of a book in the cart
// function cart_plus(id, price) {

//     let book = cart.find(book => book.id == id);

//     book.quantity++;

//     // Update the text content of the label element
//     document.getElementById('quantity' + id).textContent = book.quantity;

//     // Update the cart data in localStorage
//     localStorage.setItem('cart_cont', JSON.stringify(cart));

//     // Update the cart display
//     updateCart();
// }

// // Function to remove a book from the cart
// function cartremoves(id) {
//     // Remove the book from the cart
//     cart = cart.filter(book => book.id != id);

//     // Update the cart data in localStorage
//     localStorage.setItem('cart_cont', JSON.stringify(cart));

//     // Update the cart display
//     updateCart();
// }


// Function to simulate checkout (you can replace this with your actual checkout process)
function checkout() {
    alert('Thank you for shopping! Your order has been placed.');
    cart = []; // Clear the cart
    updateCart();
    // // Get the cart display element
    // let cartDisplay = document.getElementById('cart_cont');

    // // Get the cart data from localStorage
    // let cart = JSON.parse(localStorage.getItem('cart_cont'));

    // // Clear the current cart display
    // cartDisplay.innerHTML = '';

    // // Initialize total price
    // let totalPrice = 0;
    // cartDisplay.innerHTML = "<p class='empty'>Your books cart is empty!</p>";
    // cartNumber = 0;
    // cartPrice = 0;
    // let totalItems = document.getElementById('cart_number');
    // totalItems.textContent = cartNumber;
    // let DisplaytotalPrice = document.getElementById('cart_price');
    // DisplaytotalPrice.textContent = cartPrice + ' LE';
}
