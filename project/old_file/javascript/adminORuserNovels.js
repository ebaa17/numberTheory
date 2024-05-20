document.addEventListener('DOMContentLoaded', function() {
    const isAdmin = localStorage.getItem('checkAdmin');
    if (isAdmin === 'true') {
        // Display div for admin
        document.getElementById('admin').style.display = 'block';
        document.getElementById('user').style.display = 'none';
    } else {
        // Display div for user
        document.getElementById('admin').style.display = 'none';
        document.getElementById('user').style.display = 'block';
    }
});
