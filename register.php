<?php
require 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Enkripsi password

    // Cek apakah username sudah digunakan
    $check_user_query = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($check_user_query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "<script>alert('Username sudah digunakan.'); window.history.back();</script>";
    } else {
        // Masukkan user baru ke database
        $insert_user_query = "INSERT INTO users (username, password) VALUES (?, ?)";
        $stmt = $conn->prepare($insert_user_query);
        $stmt->bind_param("ss", $username, $password);

        if ($stmt->execute()) {
            // Tampilkan pop-up dan redirect ke halaman login setelah beberapa detik
            echo "<script>
                    alert('Registrasi berhasil! Anda akan dialihkan ke halaman login.');
                    setTimeout(function() {
                        window.location.href = 'login.html';
                    }, 2000); // Waktu delay 2 detik sebelum redirect
                  </script>";
        } else {
            echo "<script>alert('Terjadi kesalahan, silakan coba lagi.'); window.history.back();</script>";
        }
    }
}
?>

