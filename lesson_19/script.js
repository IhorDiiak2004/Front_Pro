
const API_KEY = "48f91bd0b8ca13ef8d21051c605b6708";
const cityName = "Lviv";
const lat = 49;
const lon = 24; 

const weatherBlock = document.getElementById("weather");
const btn = document.getElementById("btn");

async function getData() {
  weatherBlock.textContent = "Завантаження...";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ua`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    weatherBlock.textContent = "";

    const city = document.createElement("p");
    const temp = document.createElement("p");
    const feels = document.createElement("p");
    const desc = document.createElement("p");

    city.textContent = `Місто: ${cityName}`;
    temp.textContent = `Температура: ${Math.round(data.main.temp)}°C`;
    feels.textContent = `Відчувається як: ${Math.round(data.main.feels_like)}°C`;
    desc.textContent = `Погода: ${data.weather[0].description}`;

    weatherBlock.appendChild(city);
    weatherBlock.appendChild(temp);
    weatherBlock.appendChild(feels);
    weatherBlock.appendChild(desc);

  } catch (error) {
    weatherBlock.textContent = "Помилка запиту";
    console.error("Помилка:", error);
  }
}

btn.addEventListener("click", getData);

