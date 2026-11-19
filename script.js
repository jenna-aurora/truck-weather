const url =
  "https://api.open-meteo.com/v1/forecast?latitude=34.69708&longitude=-81.34398&current=temperature_2m,wind_speed_10m&temperature_unit=celsius";
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
}
button.addEventListener("click", getWeather);
