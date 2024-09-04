document
  .getElementById("weather-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const city = document.getElementById("city").value;
    const apiKey = "c2ce1b88d21c803d401d65d520d2431f";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          document.getElementById("weather-info").classList.remove("hidden");
          document.getElementById("error-message").classList.add("hidden");
          document.getElementById(
            "city-name"
          ).textContent = `${data.name}, ${data.sys.country}`;
          document.getElementById(
            "temperature"
          ).textContent = `Temperature: ${data.main.temp}°C`;
          document.getElementById(
            "description"
          ).textContent = `Description: ${data.weather[0].description}`;
          document.getElementById(
            "humidity"
          ).textContent = `Humidity: ${data.main.humidity}%`;
          document.getElementById(
            "wind-speed"
          ).textContent = `Wind Speed: ${data.wind.speed} m/s`;

          updateBackground(data.weather[0].main);
        } else {
          document.getElementById("weather-info").classList.add("hidden");
          document.getElementById("error-message").classList.remove("hidden");
        }
      })
      .catch(() => {
        document.getElementById("weather-info").classList.add("hidden");
        document.getElementById("error-message").classList.remove("hidden");
      });
  });

  function updateBackground(weatherCondition) {
    const body = document.body;
  
    switch (weatherCondition) {
      case "Clear":
        body.style.backgroundColor = "#87CEEB"; 
        break;
      case "Clouds":
        body.style.backgroundColor = "#B0C4DE"; 
        break;
      case "Rain":
        body.style.backgroundColor = "#4682B4"; 
        break;
      case "Snow":
        body.style.backgroundColor = "#FFFFFF"; 
        break;
      case "Thunderstorm":
        body.style.backgroundColor = "#2F4F4F"; 
        break;
      case "Drizzle":
        body.style.backgroundColor = "#B0E0E6"; 
        break;
      default:
        body.style.backgroundColor = "#D3D3D3"; 
        break;
    }
  }
  
