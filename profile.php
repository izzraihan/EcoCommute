<?php
session_start();

// Cek apakah user sudah login
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}

// Ambil data dari session
$username = $_SESSION['username'];
$total_poin = $_SESSION['total_poin'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Basic Meta Tags -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  
  <title>EcoCommute</title>

  <!-- Bootstrap Core CSS -->
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />

  <!-- Font and Icon Styles -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
  <link href="css/font-awesome.min.css" rel="stylesheet" />

  <!-- Owl Slider Stylesheet -->
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />

  <!-- Custom Styles for this Template -->
  <link href="css/style.css" rel="stylesheet" />
  <link href="css/responsive.css" rel="stylesheet" />
  <link rel="stylesheet" href="css/profile.css">

</head>

<body class="sub_page">

  <!-- Header Section Start -->
  <div class="hero_area">
    <div class="hero_bg_box">
      <div class="bg_img_box">
        <img src="images/hero-bg.png" alt="Background">
      </div>
    </div>

    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="index.html">
            <span>EcoCommute</span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Main.html">Main</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="mission.html">Mission</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="tukarpoin.html">Tukar Poin</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="login.html">
                  <i class="fa fa-user" aria-hidden="true"></i> Login <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
  <!-- Header Section End -->

  <!-- Profile Section Start -->
  <div class="container">
    <!-- Menampilkan data username dan total poin -->
    <h2>Selamat datang, <?php echo htmlspecialchars($username); ?>!</h2>
    <p>Total Poin Anda: <?php echo htmlspecialchars($total_poin); ?></p>

    <h3>Riwayat Penukaran Poin</h3>
    <table id="riwayat-table">
      <thead>
        <tr>
          <th>Nama Hadiah</th>
          <th>Poin yang Ditukar</th>
          <th>Tanggal</th>
        </tr>
      </thead>
      <tbody>
        <!-- Data bisa diisi oleh PHP atau JavaScript -->
        <tr>
          <td colspan="3">Belum ada riwayat penukaran.</td>
        </tr>
      </tbody>
    </table>

    <a href="logout.php" class="btn btn-danger">Logout</a>
  </div>
  <!-- Profile Section End -->

  <!-- Footer Section Start -->
  <section class="footer_section" style="background-color: #00204a; color: white; padding: 20px; text-align: center;">
    <p style="color: white;">&copy; <span id="displayYear"></span> EcoCommute. All rights reserved</p>
  </section>
  <!-- Footer Section End -->

  <!-- jQuery and Bootstrap JS -->
  <script src="js/jquery-3.4.1.min.js"></script>
  <script src="js/bootstrap.js"></script>
  <!-- Owl Slider JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
  <!-- Custom JS -->
  <script src="js/custom.js"></script>

</body>
</html>
