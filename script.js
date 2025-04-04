async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '694522a57e72df9d3bde7d08012a56a7'; // 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        const weatherDetails = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].main}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind: ${data.wind.speed} m/s</p>
        `;
        document.getElementById('weatherResult').innerHTML = weatherDetails;
      } else {
        document.getElementById('weatherResult').innerHTML = `<p>City not found!</p>`;
      }
    } catch (error) {
      console.log(error);
      document.getElementById('weatherResult').innerHTML = `<p>Error fetching weather data.</p>`;
    }
  }
  
  
