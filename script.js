// Import the API key from config.js
import apiKey from './config.js';

// Target city
const city = 'New York';

// Custom weather icon map
const iconMap = {
  Clear: 'assets/weather/animated/day.svg',
  Clouds: 'assets/weather/animated/cloudy-day-3.svg',
  Rain: 'assets/weather/animated/rainy-3.svg',
  Snow: 'assets/weather/animated/snowy-3.svg',
  Thunderstorm: 'assets/weather/animated/thunder.svg',
  Mist: 'assets/weather/animated/cloudy.svg',
};

// Fetch Weather Data
async function fetchWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
  const data = await response.json();

  const temp = Math.round(data.main.temp);
  const condition = data.weather[0].main;

  // Map condition to custom icon
  const iconUrl = iconMap[condition] || 'assets/weather/animated/cloudy-day-1.svg';

  // Update weather widget
  document.querySelector('#weather-icon').src = iconUrl;
  document.querySelector('#weather-widget p:nth-of-type(1)').textContent = `${temp}°F - ${condition}`;
  document.querySelector('#weather-widget p:nth-of-type(2)').textContent = `${data.name}`;
}

// Call the function when the page loads
fetchWeather();
