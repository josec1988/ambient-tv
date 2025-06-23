// script.js

// OpenWeather API Key
const apiKey = '242e274db84f68040ac3b0017f9953ce';

// Target city (New York for now)
const city = 'New York';

// Fetch Weather Data
async function fetchWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
  const data = await response.json();

  // Update weather widget
  document.querySelector('#weather-widget p:nth-of-type(1)').textContent = `${Math.round(data.main.temp)}°F - ${data.weather[0].main}`;
  document.querySelector('#weather-widget p:nth-of-type(2)').textContent = `${data.name}`;
}

// Call the function when the page loads
fetchWeather();
