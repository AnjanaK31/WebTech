async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = ''; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const errorText = document.getElementById('error');
  const card = document.getElementById('weatherCard');
  errorText.textContent = "";
  card.classList.add("hidden");

  if (!city) {
    errorText.textContent = "Please select a city.";
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    document.getElementById('city').textContent = data.name;
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('icon').alt = data.weather[0].description;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('temp').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} km/h`;

    card.classList.remove("hidden");
  } catch (error) {
    errorText.textContent = error.message;
  }
}
