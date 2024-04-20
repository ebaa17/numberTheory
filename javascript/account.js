function changePhoto(){
    const changePhotoBtn = document.getElementById('changePhotoBtn');
    const profileImg = document.getElementById('profileImg');

    changePhotoBtn.addEventListener('click', function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
        profileImg.src = event.target.result;
        };

        reader.readAsDataURL(file);
    });

    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
    });
}

function getName(){

}

function logout(){
    
}
