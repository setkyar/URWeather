import Keys from '../env/keys';

const weatherApiRoot = `https://api.openweathermap.org/data/2.5/weather?appid=${Keys.OpenWeatherAppID}&units=metric`;

async function fetchWeather(lat, lon) {
  const url = `${weatherApiRoot}&lat=${lat}&lon=${lon}`;
  const response = await fetch(url);
  const weatherJson = await response.json();
  return weatherJson;
}

export default fetchWeather;
