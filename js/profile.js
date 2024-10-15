document.addEventListener('DOMContentLoaded', function () {
    const usernameElement = document.getElementById('username');
    const totalPoinElement = document.getElementById('total-poin');
    const riwayatTableBody = document.querySelector('#riwayat-table tbody');
    const logoutBtn = document.getElementById('logout-btn');

    // Ambil user yang login dari localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        // Jika tidak ada user yang login, redirect ke halaman login
        alert("Anda harus login terlebih dahulu.");
        window.location.href = 'login.html';
        return;
    }

    // Tampilkan data user
    usernameElement.textContent = loggedInUser.username;
    totalPoinElement.textContent = loggedInUser.totalPoin || 0;

    // Ambil riwayat penukaran dari localStorage
    const riwayatPenukaran = JSON.parse(localStorage.getItem('riwayatPenukaran')) || [];

    // Filter riwayat untuk user yang sedang login
    const userRiwayat = riwayatPenukaran.filter(item => item.username === loggedInUser.username);

    // Render riwayat penukaran ke tabel
    if (userRiwayat.length > 0) {
        userRiwayat.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.namaHadiah}</td>
                <td>${item.poin}</td>
                <td>${item.tanggal}</td>
            `;
            riwayatTableBody.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="3">Belum ada riwayat penukaran.</td>`;
        riwayatTableBody.appendChild(row);
    }

    // Handle logout
    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('loggedInUser'); // Hapus sesi user
        window.location.href = 'login.html'; // Redirect ke halaman login
    });
});
