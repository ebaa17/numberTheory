document.addEventListener("DOMContentLoaded", function () {
    const storedBookId = localStorage.getItem("clickedAnchorId");

    const bookArrayString = localStorage.getItem("infoBooksinStorage");
    const bookArray = JSON.parse(bookArrayString) || [];  // Handle potential null value

    let retrievedBook;
    for (let i = 0; i < bookArray.length; i++) {
        if (bookArray[i].idofBook === storedBookId) {
            retrievedBook = bookArray[i];
            break;
        }
    }
    console.log(retrievedBook);

    if (retrievedBook) {

        const bookTitle = document.getElementById("name"); // Use bookTitle for clarity
        bookTitle.textContent = retrievedBook.nameofBook; // Assuming Btitle is the property for title
        const bookPrice = document.getElementById("price");
        bookPrice.textContent = retrievedBook.priceofBook;
        const bookAuthor = document.getElementById("author");
        bookAuthor.textContent = retrievedBook.authorofBook;
        const bookCategory = document.getElementById("category");
        bookCategory.textContent = retrievedBook.Bcategory;
        const bookDesc = document.getElementById("description");
        bookDesc.textContent = retrievedBook.descofBook;
        const bookAvail = document.getElementById("available");
        bookAvail.textContent = retrievedBook.Bavailable;
    } else {
        console.warn("Book with ID", storedBookId, "not found in local storage");
    }
});
