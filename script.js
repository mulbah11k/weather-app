
document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
    getWeather(city);
    }
});

function getWeather(city) {
    const apiKey = '37ae885e9ce28a7701b4f7d956641931';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200) {
            document.getElementById('temp').textContent = `${data.main.temp}°C`;
            document.getElementById('location').textContent = data.name;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').textContent = `Wind Speed: ${(data.wind.speed * 3.6).toFixed(2)} km/h`;
        } else {
            alert('City not found');
        }
    })
    .catch(error => console.error('Error fetching the weather data:', error));
}
