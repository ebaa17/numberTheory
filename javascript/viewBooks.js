function getAllBooksFromLocalStorage() {
    let books = [];
    const prefix = 'id'; // Update with your key prefix

    // if(localStorage.length === 0){
    //     console.log("fady");
    // }
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(prefix)) { // Check if key starts with "id"
            try {
                const bookJSON = localStorage.getItem(key);
                const book = JSON.parse(bookJSON);
                books.push(book);
            }
            catch (error) {
                console.error('Error parsing stored book:', error);
            }
            }
    }
    console.log(books);
    return books;
}

function addBooksToAdmin(books) {
    const tableBody = document.getElementById('bookTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing content

    books.forEach(book => {
        const tableRow = document.createElement('tr');
    
        const idCell = document.createElement('td');
        idCell.textContent = book.Bid;
        tableRow.appendChild(idCell);
    
        const nameCell = document.createElement('td');
        nameCell.textContent = book.Btitle;
        tableRow.appendChild(nameCell);

        const authorCell = document.createElement('td');
        authorCell.textContent = book.Bauthor;
        tableRow.appendChild(authorCell);

        const categoryCell = document.createElement('td');
        categoryCell.textContent = book.Bcategory;
        tableRow.appendChild(categoryCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = book.Bdescription;
        tableRow.appendChild(descriptionCell);

        const BtnsCell = document.createElement('td');
        BtnsCell.className = 'Buttons';

        const editButton = document.createElement('button');
        editButton.className = "edit";
        editButton.textContent = "Edit";
        editButton.onclick = function() { editBook(book.Bid); };

        const deleteButton = document.createElement('button');
        deleteButton.className = "delete";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() { deleteBook(book.Bid); };

        BtnsCell.appendChild(editButton);
        BtnsCell.appendChild(deleteButton);

        tableRow.appendChild(BtnsCell);
        
        tableBody.appendChild(tableRow);
    });
}

function addBooksToUser(books){
    
    const booksContainer = document.getElementById('books');
    booksContainer.innerHTML = ''; // Clear existing content

    books.forEach(book => {

    const bookContainer = document.createElement('div');
    bookContainer.className = "book";

    const bookImage = document.createElement('img');
    bookImage.src = "https://placehold.co/200x300";
    bookImage.alt = "Book Image";
    bookContainer.appendChild(bookImage);

    const bookContent = document.createElement('div');
    bookContent.className = "content";

    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.Btitle;
    bookContent.appendChild(bookTitle);

    const bookLinks = document.createElement('div');
    bookLinks.className = "links";

    const viewDetailsLink = document.createElement('a');
    viewDetailsLink.href = "details.html";
    viewDetailsLink.id = `id${book.Bid}`;
    viewDetailsLink.textContent = "view details";
    bookLinks.appendChild(viewDetailsLink);

    const addToCartContainer = document.createElement('div');
    addToCartContainer.className = "add-to-cart";

    const addToCartButton = document.createElement('button');
    addToCartButton.type = "button";
    addToCartButton.className = "addToCart-btn";
    addToCartButton.title = "Add to cart";
    addToCartButton.id = `add-to-cart-button`;
    addToCartButton.textContent = "Add to cart";

    addToCartButton.onclick = function() {
        addToCart(book.Bid, book.Bname, book.Bprice, "", book.Bcategory);
    };

    // console.log(addToCartButton);
    // console.log(addToCartContainer);
    // console.log(bookLinks);
    // console.log(bookContent);
    // console.log(bookContainer);

    addToCartContainer.appendChild(addToCartButton);
    bookLinks.appendChild(addToCartContainer);

    bookContent.appendChild(bookLinks);
    bookContainer.appendChild(bookContent);

    booksContainer.appendChild(bookContainer);

    });
    // console.log(booksContainer[0]);
    return booksContainer;
}

// export { addBooksToAdmin, addBooksToUser, getAllBooksFromLocalStorage };
window.onload = _ => {const books = getAllBooksFromLocalStorage();
addBooksToAdmin(books);
addBooksToUser(books);}
