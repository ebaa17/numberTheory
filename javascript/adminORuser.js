const signupinform = document.getElementById("signupinform");
const checkboxAdmin = document.getElementById("checkboxAdmin");

signupinform.addEventListener('click' , function(){
    if(checkboxAdmin.checked){
        localStorage.setItem('checkAdmin' , true);
        const admin = localStorage.getItem('checkAdmin');
        console.log(admin);
    }
    else{
        localStorage.setItem('checkAdmin' , false);
        const admin = localStorage.getItem('checkAdmin');
        console.log(admin);
    }
});