document.addEventListener("DOMContentLoaded", function() {
    const totalPoinElement = document.getElementById("total-poin");
    let totalPoin = localStorage.getItem("totalPoin") ? parseInt(localStorage.getItem("totalPoin")) : 500;
    totalPoinElement.textContent = totalPoin;

    const exchangeButtons = document.querySelectorAll(".exchange-btn");
    const modal = document.getElementById("confirm-modal");
    const closeModalBtn = document.querySelector(".close-btn");
    const confirmExchangeBtn = document.getElementById("confirm-exchange");
    let selectedRewardPoints;
    let selectedButton;

    // Fungsi untuk membuka modal dengan animasi
    function showModal() {
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10);
    }

    // Fungsi untuk menutup modal dengan animasi
    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => modal.style.display = "none", 500);
    }

    // Buka modal
    exchangeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const pointsRequired = parseInt(button.getAttribute("data-points"));
            const rewardName = button.previousElementSibling.previousElementSibling.textContent;

            if (totalPoin >= pointsRequired) {
                selectedRewardPoints = pointsRequired;
                selectedButton = button;

                // Tampilkan modal dengan info reward
                document.getElementById("reward-name").textContent = rewardName;
                document.getElementById("reward-points").textContent = pointsRequired;

                showModal();
            } else {
                alert("Poin Anda tidak cukup untuk menukarkan hadiah ini.");
            }
        });
    });

    // Tutup modal
    closeModalBtn.addEventListener("click", closeModal);

    // Konfirmasi penukaran
    confirmExchangeBtn.addEventListener("click", function() {
        totalPoin -= selectedRewardPoints;
        totalPoinElement.textContent = totalPoin;
        localStorage.setItem("totalPoin", totalPoin);

        // Simpan riwayat penukaran di localStorage (contoh)
        const riwayatPenukaran = JSON.parse(localStorage.getItem("riwayatPenukaran")) || [];
        riwayatPenukaran.push({
            namaHadiah: document.getElementById("reward-name").textContent,
            poin: selectedRewardPoints,
            tanggal: new Date().toLocaleString()
        });
        localStorage.setItem("riwayatPenukaran", JSON.stringify(riwayatPenukaran));

        alert(`Selamat! Anda telah menukarkan ${selectedRewardPoints} poin.`);
        selectedButton.disabled = true;
        selectedButton.textContent = "Sudah Ditukar";

        closeModal();
    });

    // Tutup modal jika mengklik di luar area modal
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
