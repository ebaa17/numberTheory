const signupinform = document.getElementById("signupinform");
const checkboxAdmin = document.getElementById("checkboxAdmin");

signupinform.addEventListener('click' , function(){
    const usernamevalue = document.getElementById("usernameInput").value;
    console.log (usernamevalue);

    if(checkboxAdmin.checked && usernamevalue !== null){
        localStorage.setItem('checkAdmin' , true);
        const admin = localStorage.getItem('checkAdmin');
        console.log(admin);
        localStorage.setItem('userName' , usernamevalue);
        const uname  = localStorage.getItem('userName');
        console.log(uname);
        window.location.href='accountUser.html';
    }
    else if (!checkboxAdmin.checked && usernamevalue !== null){
        localStorage.setItem('checkAdmin' , false);
        const admin = localStorage.getItem('checkAdmin');
        console.log(admin);
        localStorage.setItem('userName' , usernamevalue);
        const uname  = localStorage.getItem('userName');
        console.log(uname);
        window.location.href='accountUser.html';
    }
});