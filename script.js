// Initialize the OpenStreetMap
let map;

// Event listener untuk tombol "Get Started"
document.getElementById('get-started-btn').addEventListener('click', function() {
    // Sembunyikan layar pembuka
    document.getElementById('splash-screen').classList.add('hidden');

    // Tampilkan konten utama
    document.getElementById('main-content').classList.remove('hidden');

    // Tampilkan peta
    document.getElementById("map").style.display = "block"; // Tampilkan elemen peta
    map = L.map('map').setView([-6.1751, 106.8650], 16); // Set to Jakarta by default

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});

// Simulasi pencarian rute (saat ini hanya contoh statis)
$('#search-route').on('click', function() {
    let start = $('#start-location').val();
    let end = $('#end-location').val();

    if (start && end) {
        $('#route-result').html(`<p>Perjalanan dari <strong>${start}</strong> ke <strong>${end}</strong> akan membutuhkan biaya sekitar Rp 15,000 dengan Bus.</p>`);
    } else {
        $('#route-result').html('<p>Mohon masukkan lokasi awal dan tujuan.</p>');
    }
});

// Get user location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Fetch weather data
        fetchWeatherData(lat, lon);
        // Fetch pollution data
        fetchPollutionData(lat, lon);
    }, () => {
        alert("Could not retrieve your location.");
    });
} else {
    alert("Geolocation is not supported by this browser.");
}

// Function to fetch weather data
function fetchWeatherData(lat, lon) {
    const apiKey = '1fd5dd3c3c688858f335364fb3c85406';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${'1fd5dd3c3c688858f335364fb3c85406'}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = `
                <h3>Weather:</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Condition: ${data.weather[0].description}</p>
            `;
            document.getElementById('weather-info').innerHTML = weather;
        });
}

// Function to fetch pollution data
function fetchPollutionData(lat, lon) {
    const apiKey = '912ebdfa-4a68-461b-943a-b24ff41469c0';
    const url = `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${'912ebdfa-4a68-461b-943a-b24ff41469c0'}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pollution = `
                <h3>Pollution Level:</h3>
                <p>AQI: ${data.data.current.pollution.aqius}</p>
            `;
            document.getElementById('pollution-info').innerHTML = pollution;
        });
}
