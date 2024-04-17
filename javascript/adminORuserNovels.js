window.onload = function(){
    const admin_best_sales = document.querySelectorAll('.admin_best_sales');
    const borrow_book = document.querySelectorAll('.borrow_book');
    const checkAdminforNovels = localStorage.getItem('checkAdmin');
    console.log(admin_best_sales);
    console.log(borrow_book);
    console.log(checkAdminforNovels);
    if(checkAdminforNovels === "true"){
        console.log("its true")
        admin_best_sales.forEach(element => { // Iterate over each element
            element.classList.add("active");
        });
    }
    else if(checkAdminforNovels === "false"){
        console.log("its false")
        borrow_book.forEach(element => { // Iterate over each element
            element.classList.add("active");
        });
    }
}