function showEditBookWindow() {
    document.getElementById("bookIdInput").value = ""; // delete the last put values for both input and error
    document.getElementById("errorMessage").textContent = "";
    takeID();
}
// show the window to take the id of the book
function takeID() {
    document.getElementById('bookIdinput').style.display = 'block'; 
}
// close the window if the id is valid and show the window of the bookinfo
function closeWindow() {
    document.getElementById('bookIdinput').style.display = 'none';
}

function checkBookId() {
    // get the input put in the field by the admin
    let bookId = document.getElementById('bookIdInput').value;
    // if the admnin put an id and it exists 
    if (bookId && bookExists(bookId)) {
        //show the bookinfo window
        document.getElementById("editBookWindow").style.display = "block";
        // put the defalut values of each place as the last put one of the book
        setDefaults(bookId);
        // close the window of taking the id
        closeWindow();
    } else {
        // show an error message that the id is not valid
        document.getElementById("errorMessage").textContent = "Book ID not found. Please enter a valid ID.";
    }
}
// look for the id in the local storage
function bookExists(bookId) {
    // return bookId == 1001444;
    const booksInfo = JSON.parse(localStorage.getItem('infoBooksinStorage')) || [];
    return booksInfo.some(book => book.idofBook === bookId);
}

function setDefaults(bookId) {
    // if the local storage isn't empty get all books and put them in that array
    const booksInfo = JSON.parse(localStorage.getItem('infoBooksinStorage')) || [];
    // look for the wanted book 
    const validBook = booksInfo.find(book => book.idofBook === bookId);

    if (validBook) {
        // Set the values of the input fields with the found book's information
        document.getElementById("newName").value = validBook.nameofBook;
        document.getElementById("newAuthor").value = validBook.authorofBook;
        document.getElementById("newPrice").value = validBook.priceofBook;
        document.getElementById("newDescription").value = validBook.descofBook;
        document.getElementById("newCategory").value = validBook.Bcategory;
    } else {
        console.log("Book not found in local storage.");
    }
}
function saveEditedBook(bookId) {
    // take the values from the window(defaults and inputs) and store them here
    const newName = document.getElementById("newName").value;
    const newAuthor = document.getElementById("newAuthor").value;
    const newPrice = document.getElementById("newPrice").value;
    const newDescription = document.getElementById("newDescription").value;
    const newCategory = document.getElementById("newCategory").value;
    
    if(!(newName != null && newAuthor != null && newPrice != null && newDescription != null && newCategory != null)){
        document.getElementById("errorMessage").textContent = "Book Info are not complete.";
        document.getElementById("editBookWindow").style.display = "none";
        return
    }
    // from the array of books get the index of the wanted book
    let booksInfo = JSON.parse(localStorage.getItem('infoBooksinStorage')) || [];
    const index = booksInfo.findIndex(book => book.idofBook === bookId);
    // if the book exits and it will sure exits if we're here update the info of it
    if (index !== -1) {
        booksInfo[index].nameofBook = newName;
        booksInfo[index].authorofBook = newAuthor;
        booksInfo[index].priceofBook = newPrice;
        booksInfo[index].descofBook = newDescription;
        booksInfo[index].Bcategory = newCategory;
        
        localStorage.setItem('infoBooksinStorage', JSON.stringify(booksInfo));

        console.log("Book updated successfully.");
    } else {
        console.log("Book not found in local storage.");
    }
    // close the window
    document.getElementById("editBookWindow").style.display = "none";
}

document.getElementById("edit").addEventListener("click", showEditBookWindow);
// document.getElementById("edit-historical").addEventListener("click", showEditBookWindow);
// document.getElementById("edit-fiction").addEventListener("click", showEditBookWindow);
// document.getElementById("edit-horror").addEventListener("click", showEditBookWindow);
// document.getElementById("edit-investigation").addEventListener("click", showEditBookWindow);
