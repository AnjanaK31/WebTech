
document.getElementById("city-select").addEventListener("change", function () {
  const city = this.value;
  const apiKey = "77422c757a8458eef9160062524b1997"; 

  const errorText = document.getElementById('error');
  const card = document.getElementById('weather-card');

  errorText.textContent = "";
  card.classList.add("hidden");

  if (!city) {
    errorText.textContent = "Please select a city.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      document.getElementById("city-name").innerText = data.name;
      document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
      document.getElementById("condition").innerText = `Condition: ${data.weather[0].description}`;
      document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
      document.getElementById("wind").innerText = `Wind Speed: ${data.wind.speed} km/h`;
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      card.classList.remove("hidden");
    })
    .catch(err => {
      console.error(err);
      errorText.textContent = "Error: " + err.message;
    });
});
