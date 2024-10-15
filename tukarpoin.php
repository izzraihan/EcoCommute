<?php
session_start();
require 'db_connection.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = $_SESSION['user_id'];
    $nama_hadiah = $_POST['nama_hadiah'];
    $poin = $_POST['poin'];
    $total_poin = $_SESSION['total_poin'];

    // Cek apakah poin cukup
    if ($total_poin >= $poin) {
        // Kurangi poin pengguna
        $new_total_poin = $total_poin - $poin;
        $_SESSION['total_poin'] = $new_total_poin;

        // Update poin pengguna di database
        $update_poin_query = "UPDATE users SET total_poin = ? WHERE id = ?";
        $stmt = $conn->prepare($update_poin_query);
        $stmt->bind_param("ii", $new_total_poin, $user_id);
        $stmt->execute();

        // Simpan riwayat penukaran
        $insert_riwayat_query = "INSERT INTO riwayat_penukaran (user_id, nama_hadiah, poin) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($insert_riwayat_query);
        $stmt->bind_param("isi", $user_id, $nama_hadiah, $poin);
        $stmt->execute();

        echo "Penukaran berhasil!";
    } else {
        echo "Poin Anda tidak cukup.";
    }
}
?>

