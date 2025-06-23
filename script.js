// OpenWeather API Key
const apiKey = '242e274db84f68040ac3b0017f9953ce';

// Target city
const city = 'New York';

// Fetch Weather Data
async function fetchWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
  const data = await response.json();

  // Extract weather info
  const temp = Math.round(data.main.temp);
  const condition = data.weather[0].main;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Update weather widget
  document.querySelector('#weather-icon').src = iconUrl;
  document.querySelector('#weather-widget p:nth-of-type(1)').textContent = `${temp}°F - ${condition}`;
  document.querySelector('#weather-widget p:nth-of-type(2)').textContent = `${data.name}`;
}

// Call the function when the page loads
fetchWeather();
