function changePhoto(){
    const changePhotoBtn = document.getElementById('changePhotoBtn');
    const profileImg = document.getElementById('profileImg');

    changePhotoBtn.addEventListener('click', function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
        profileImg.src = event.target.result;
        };

        reader.readAsDataURL(file);
    });

    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
    });
}

function getBorrowedBooks() {
    const borrowedBooksJSON = localStorage.getItem('BorrowedBooks');
    
    let borrowedBooks = [];
    if (borrowedBooksJSON) {
        try {
            borrowedBooks = JSON.parse(borrowedBooksJSON);
        } catch (error) {
            console.error('Error parsing borrowed books:', error);
        }
    }
    
    return borrowedBooks;
}

function displayBorrowedBooks(books) {
    
    const borrowedBooksList = document.getElementById('borrowed-books-list');
    
    borrowedBooksList.innerHTML = '';
    
    if (books.length === 0) {
        borrowedBooksList.innerHT
        ML = '<p class="empty">You have no borrowed books.</p>';
        return;
    }
    
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'borrowed-book-item';
        bookItem.innerHTML = `
            <h3>${book.name}</h3>
            <p> <strong>Quantity: </strong>${book.quantity}</p>
            `;
        
        borrowedBooksList.appendChild(bookItem);
    });
}

const borrowedBooks = getBorrowedBooks();
displayBorrowedBooks(borrowedBooks);


function getName(){
    // function to get name from log in information
}

function logout(){
    localStorage.removeItem("loggedIn");
    window.location.href='main.html';
}
