window.onload = function(){
    const borrowBtn = document.querySelectorAll('.borrow');
    const editBtn = document.querySelectorAll('.edit');
    const deleteBtn = document.querySelectorAll('.delete');
    const addToCartBtn = document.querySelectorAll('.add-to-cart');
    const checkAdminforNovels = localStorage.getItem('checkAdmin');
    // console.log(borrowBtn);
    // console.log(editBtn);
    // console.log(deleteBtn);
    // console.log(addToCartBtn);
    console.log(checkAdminforNovels);
    if(checkAdminforNovels === "true"){ 
        console.log("its true")
        editBtn.forEach(element => { 
            element.classList.add("active");
        });
        deleteBtn.forEach(element => { 
            element.classList.add("active");
        });
    }
    else if(checkAdminforNovels === "false"){
        console.log("its false")
        borrowBtn.forEach(element => { 
            element.classList.add("active");
        });
        addToCartBtn.forEach(element => { 
            element.classList.add("active");
        });
    }
}
