function getAllBooksFromLocalStorage() {
    const storedBooks = localStorage.getItem('infoBooksinStorage');
    let books = [];
    if (storedBooks) {
        try {
            books = JSON.parse(storedBooks);
        } catch (error) {
            console.error('Error parsing stored books:', error);
        }
    }
    return books;
}

function addBooksToAdmin(books) {
    const tableBody = document.getElementById('bookTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing content

    books.forEach(book => {
        const tableRow = document.createElement('tr');
    
        const idCell = document.createElement('td');
        idCell.textContent = book.idofBook;
        tableRow.appendChild(idCell);
    
        const nameCell = document.createElement('td');
        nameCell.textContent = book.nameofBook;
        tableRow.appendChild(nameCell);

        const authorCell = document.createElement('td');
        authorCell.textContent = book.authorofBook;
        tableRow.appendChild(authorCell);

        const categoryCell = document.createElement('td');
        categoryCell.textContent = book.Bcategory;
        tableRow.appendChild(categoryCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = book.descofBook;
        tableRow.appendChild(descriptionCell);

        const BtnsCell = document.createElement('td');
        BtnsCell.className = 'Buttons';

        const editButton = document.createElement('button');
        editButton.className = "edit";
        editButton.textContent = "Edit";
        editButton.onclick = function() { editBook(book.idofBook); };

//              delete 
              
        const deleteButton = document.createElement('button');
        deleteButton.className = "delete";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            tableRow.parentNode.removeChild(tableRow);
            deleteBookFromStorage(book.idofBook,deleteButton);

        };


        BtnsCell.appendChild(editButton);
        BtnsCell.appendChild(deleteButton);

        tableRow.appendChild(BtnsCell);
        
        tableBody.appendChild(tableRow);
    });
}

function deleteBookFromStorage(bookId, deleteButton) {
    const storedBooks = getAllBooksFromLocalStorage();
    const filteredBooks = storedBooks.filter(book => book.idofBook !== bookId);
    localStorage.setItem('infoBooksinStorage', JSON.stringify(filteredBooks));
    deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode);
}


function addBooksToUser(books){
    
    const booksContainer = document.getElementById('books');
    const booksFeatured = document.getElementById('featured');
    const container = document.getElementById("container1");    
    booksFeatured.appendChild(container);
    // booksContainer.innerHTML = ''; // Clear existing content

    books.forEach(book => {

    const bookContainer = document.createElement('div');
    bookContainer.classList.add("book","box") ; //  s7

    const bookImage = document.createElement('img');
    bookImage.src = "https://placehold.co/200x300";
    bookImage.alt = "Book Image";
    bookImage.style.width = "100%";
    bookImage.classList.add("book-img");
    bookContainer.appendChild(bookImage); //  tmam

    const bookContent = document.createElement('div');
    bookContent.classList.add("content");

    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.nameofBook;
    const bookDescription = document.createElement('p');
    bookDescription.textContent = book.descofBook;
    bookContent.appendChild(bookTitle); //lesa 
    bookContent.appendChild(bookDescription); //lesa 
    bookContainer.appendChild(bookContent);// s7

    const bookLinks = document.createElement('div');
    bookLinks.className = "links info";

    const viewDetailsLink = document.createElement('a');
    viewDetailsLink.href = "details.html";
    viewDetailsLink.id = `${book.idofBook}`;
    viewDetailsLink.textContent = "Read more";
    const arrowIcon = document.createElement('i');
    arrowIcon.classList.add('fas', 'fa-long-arrow-alt-right');
    viewDetailsLink.appendChild(arrowIcon);
    bookLinks.appendChild(viewDetailsLink); // l7d hena s7  :)

    const addToCartContainer = document.createElement('div');
    addToCartContainer.className = "add-to-cart";

    const addToCartButton = document.createElement('button');
    addToCartButton.type = "button";
    addToCartButton.className = "addToCart-btn";
    addToCartButton.title = "Add to cart";
    addToCartButton.id = `add-to-cart-button`;
    addToCartButton.textContent = "Add to cart";


    addToCartButton.onclick = function() {
        addToCart(book.idofBook, book.nameofBook, book.priceofBook, "", book.Bcategory);
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
    container.appendChild(bookContainer);

    });
    // console.log(booksContainer[0]);
    return booksContainer;
}

const deleteButton = document.createElement('button');
deleteButton.className = "delete";
deleteButton.textContent = "Delete";
deleteButton.onclick = function() {

  tableRow.parentNode.removeChild(tableRow);

  deleteBookFromStorage(book.idofBook);
};
function deleteBookFromStorage(bookId) {
    const storedBooks = getAllBooksFromLocalStorage();
    const filteredBooks = storedBooks.filter(book => book.idofBook !== bookId);
    localStorage.setItem('infoBooksinStorage', JSON.stringify(filteredBooks));
}
window.onload = _ => {const books = getAllBooksFromLocalStorage();
    addBooksToAdmin(books);
  
    const updatedBooks = getAllBooksFromLocalStorage();// to update
    addBooksToAdmin(updatedBooks);
    addBooksToUser(books)
};
    




// export { addBooksToAdmin, addBooksToUser, getAllBooksFromLocalStorage };

