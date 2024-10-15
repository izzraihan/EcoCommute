// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
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

// Get user location and display weather, pollution, and location name
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Fetch weather and pollution data
        fetchWeatherData(lat, lon);
        fetchPollutionData(lat, lon);
        fetchLocationName(lat, lon);  // Get the location name and display it
    }, (error) => {
        alert("Could not retrieve your location.");
        document.getElementById('location-info').innerText = "Unable to access your location.";
    });
} else {
    alert("Geolocation is not supported by this browser.");
}

// Function to fetch weather data
function fetchWeatherData(lat, lon) {
    const apiKey = '1fd5dd3c3c688858f335364fb3c85406';  // OpenWeather API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

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
    const apiKey = '912ebdfa-4a68-461b-943a-b24ff41469c0';  // AirVisual API Key
    const url = `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${apiKey}`;

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

// Function to fetch the location name using reverse geocoding
function fetchLocationName(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const location = data.address.city || data.address.town || data.address.village || "your area";
            document.getElementById('location-info').innerText = `You are currently in: ${location}`;
        })
        .catch(error => {
            console.error("Error fetching location name: ", error);
            document.getElementById('location-info').innerText = "Unable to retrieve location name.";
        });
}
