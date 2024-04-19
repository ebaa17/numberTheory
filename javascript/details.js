let id, title, author, publisher, price;
id = "id1";
title = "The Lord of the Rings";
author = "JK rowlings";
publisher = "Dar el hanan";
price = 189;

let book = {
    Bid: id,
    Btitle: title,
    Bauthor: author,
    Bpublisher: publisher,
    Bprice: price
};
// Store the book details in local storage
localStorage.setItem(book.Bid.toString(), JSON.stringify(book)); // Convert object to string before storing

id = "id2";
title = "harry potter";
author = "nour eldeen";
publisher = "ay 7aga";
price = 199;

book.Bid = id;
book.Btitle = title;
book.Bauthor = author;
book.Bpublisher = publisher;
book.Bprice = price;

localStorage.setItem(book.Bid.toString(), JSON.stringify(book)); // Convert object to string before storing






// Example: retrieve the book object from local storage (assuming ID is known)
document.addEventListener("DOMContentLoaded", function () {
    const storedBookId = localStorage.getItem("clickedAnchorId");
    const retrievedBookString = localStorage.getItem(storedBookId.toString());

    if (retrievedBookString) {
        const retrievedBook = JSON.parse(retrievedBookString);

        const bookTitle = document.getElementById("name"); // Use bookTitle for clarity
        bookTitle.textContent = retrievedBook.Btitle; // Assuming Btitle is the property for title
        const bookPrice = document.getElementById("price"); // Use bookTitle for clarity
        bookPrice.textContent = retrievedBook.Bprice; // Assuming Btitle is the property for title
        const bookAuthor = document.getElementById("author"); // Use bookTitle for clarity
        bookAuthor.textContent = retrievedBook.Bauthor; // Assuming Btitle is the property for title
        const bookPublisher = document.getElementById("publisher"); // Use bookTitle for clarity
        bookPublisher.textContent = retrievedBook.Bpublisher; // Assuming Btitle is the property for title
    } else {
        console.warn("Book with ID", storedBookId, "not found in local storage");
    }
});


