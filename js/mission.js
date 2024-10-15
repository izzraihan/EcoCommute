document.addEventListener("DOMContentLoaded", function() {
    const claimButtons = document.querySelectorAll(".claim-btn");

    claimButtons.forEach(button => {
        button.addEventListener("click", function() {
            const reward = button.getAttribute("data-reward");
            const status = button.getAttribute("data-status");

            if (status === "complete") {
                alert(`Selamat! Anda telah mengklaim ${reward} poin.`);
                button.disabled = true;  // Disable button after claiming
                button.textContent = "Claimed";  // Change button text
            } else {
                alert("Progress belum selesai, silakan selesaikan misi terlebih dahulu.");
            }
        });
    });
});
