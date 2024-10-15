document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');

    // Mock data for testing purposes
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Handle register
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        // Cek jika user sudah ada
        if (users.find(user => user.username === username)) {
            alert('Username sudah terdaftar.');
            return;
        }

        // Tambahkan user baru ke localStorage
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registrasi berhasil! Silakan login.');
        registerForm.reset();
        window.location.href = 'login.html'; // Arahkan kembali ke halaman login setelah register
    });
});
