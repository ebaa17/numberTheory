const container = document.getElementById('LScontainer');
const registerBtn = document.getElementById('register'); 
const loginBtn = document.getElementById('Login'); 

registerBtn.onclick = function(){
    container.classList.add("active");
}
loginBtn.onclick = function(){
    container.classList.remove("active");
}
