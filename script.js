const url =
  "https://api.open-meteo.com/v1/forecast?latitude=34.69708&longitude=-81.34398&current=temperature_2m,wind_speed_10m,precipitation&temperature_unit=celsius";
const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");
async function getWeather() {
  weatherArea.innerHTML = "";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  //temperature
  const temperature = document.createElement("p");
  temperature.className = "fs-4";
  temperature.textContent =
    "Temperature:" +
    data.current.temperature_2m +
    " " +
    data.current_units.temperature_2m;
  weatherArea.appendChild(temperature);

  //wind speed
  const wind = document.createElement("p");
  wind.className = "fs-4";
  wind.textContent = "Wind Speed: " + data.current.wind_speed_10m;
  weatherArea.appendChild(wind);

  //precipitation
  const precipitation = document.createElement("p");
  precipitation.className = "fs-4";
  precipitation.textContent = "Precipitation: " + data.current.precipitation;
  weatherArea.appendChild(precipitation);

  //Time
  const time = document.createElement("p");
  time.className = "fs-4";
  time.textContent =
    "Time: " +
    new Date(data.current.time).toLocaleString() +
    "" +
    data.timezone;
  weatherArea.appendChild(time);

  //Slogan-style message
  const messages = [
    "🌮 Perfect weather for a craving!",
    "🍔 Hungry yet? We thought so.",
    "🚚 The forecast calls for delicious food!",
    "🌤️ Today's special: sunshine and great eats.",
    "😋 Serving smiles, one craving at a time.",
    "🔥 Fresh food, no matter the forecast!",
  ];

  const slogan = document.createElement("p");
  slogan.className = "fs-3 fw-bold text-warning";

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  slogan.textContent = randomMessage;

  weatherArea.appendChild(slogan);
}
button.addEventListener("click", getWeather);
