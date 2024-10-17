<?php
$host = 'localhost';
$db = 'tukarpoin_db';
$user = 'binus_fadli';  // Ganti dengan user MySQL yang Anda buat
$pass = 'asdasdasd';  // Ganti dengan password MySQL yang sesuai
$user = 'binus_izaz';  // Ganti dengan user MySQL yang Anda buat
$pass = 'P@ssw0rd';  // Ganti dengan password MySQL yang sesuai

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
