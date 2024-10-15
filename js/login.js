document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    // Mock data for testing purposes
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Handle login
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login berhasil!');
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'profile.html'; // Ganti dengan halaman tujuan setelah login
        } else {
            alert('Username atau password salah.');
        }
    });
});
