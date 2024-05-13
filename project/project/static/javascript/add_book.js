function uploadNewBook(){

    const valueBookId = document.getElementById("bookId").value;
    const valueBookName = document.getElementById("bookName").value;
    // const valueCoverPage = document.getElementById("coverPage").value;
    const valuePrice = document.getElementById("price").value;
    const valueAuthor = document.getElementById("author").value;
    const valueDescription = document.getElementById("description").value;
    const valueCategory = document.getElementById("category").value;
    const isAvailable = true;

    const bookInfo = {
        idofBook : valueBookId ,
        nameofBook : valueBookName ,
        // coverofBook : valueCoverPage ,
        priceofBook : valuePrice,
        authorofBook : valueAuthor,
        descofBook : valueDescription,
        Bcategory : valueCategory,
        Bavailable : isAvailable
    };

    let arrayofInfo = JSON.parse(localStorage.getItem('infoBooksinStorage')) || [];
    arrayofInfo.push(bookInfo);
    localStorage.setItem('infoBooksinStorage',JSON.stringify(arrayofInfo));

}

const AddingBookBtn = document.getElementById("AddingBookBtn");
AddingBookBtn.onclick = uploadNewBook;