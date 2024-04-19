let id, title, author, category, price, description, isAvailable = true;

let book = {
    Bid: id,
    Btitle: title,
    Bauthor: author,
    Bcategory: category,
    Bprice: price,
    Bdescription: description,
    Bavailable: isAvailable
};


// Updates the values inside the object named book
// then uploads the book to local storage with key = bookID & value = book object
function uploadBook(id, title, author, category, price, description, isAvailable = true) {
    book.Bid = id;
    book.Btitle = title;
    book.Bauthor = author;
    book.Bcategory = category;
    book.Bprice = price;
    book.Bdescription = description;
    book.Bavailable = isAvailable;
    localStorage.setItem(book.Bid.toString(), JSON.stringify(book)); // Convert object to string before storing
}

// localStorage.removeItem("id1");
uploadBook("id1", "Harry Potter", "Jk Rowlings","Fantasy", 128 , "Orphan boy discovers magic, attends Hogwarts school, battles evil Lord Voldemort.");

// Example: retrieve the book object from local storage (assuming ID is known)
document.addEventListener("DOMContentLoaded", function () {
    const storedBookId = localStorage.getItem("clickedAnchorId");
    const retrievedBookString = localStorage.getItem(String.toString(storedBookId));

    if (retrievedBookString) {
        const retrievedBook = JSON.parse(retrievedBookString);

        const bookTitle = document.getElementById("name"); // Use bookTitle for clarity
        bookTitle.textContent = retrievedBook.Btitle; // Assuming Btitle is the property for title
        const bookPrice = document.getElementById("price");
        bookPrice.textContent = retrievedBook.Bprice;
        const bookAuthor = document.getElementById("author");
        bookAuthor.textContent = retrievedBook.Bauthor;
        const bookCategory = document.getElementById("category");
        bookCategory.textContent = retrievedBook.Bcategory;
        const bookDesc = document.getElementById("description");
        bookDesc.textContent = retrievedBook.Bdescription;
        const bookAvail = document.getElementById("available");
        bookAvail.textContent = retrievedBook.Bavailable;
    } else {
        console.warn("Book with ID", storedBookId, "not found in local storage");
    }
});
