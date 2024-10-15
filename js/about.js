// Event listener untuk tombol "Cek Progress"
document.getElementById('submit-tasks').addEventListener('click', function() {
    // Ambil status checklist
    var walk = document.getElementById('walk-5km').checked;
    var transport = document.getElementById('use-public-transport').checked;
    var bike = document.getElementById('bike-10km').checked;

    // Hitung berapa checklist yang dicentang
    var completedTasks = 0;
    if (walk) completedTasks++;
    if (transport) completedTasks++;
    if (bike) completedTasks++;

    // Tampilkan hasil
    var resultMessage = `Anda telah menyelesaikan ${completedTasks} dari 3 tugas!`;
    document.getElementById('task-result').innerHTML = resultMessage;
});
