import { getCelsius, getFarenheit } from "./degree.js";
import { changeBG } from "./changeBG.js";

const search = document.querySelector('.searchButton');

search.addEventListener('click', () => {
    const location = document.querySelector('.searchInput').value;
    if(location) {
        fetchWeather(location);
    }
})

let weatherData;
let celsius = document.querySelector('.celsius');
let farenheit = document.querySelector('.farenheit');

export async function fetchWeather(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=8a7427915b0b44918a405208241505&q=${location}`, {mode: 'cors'});
    try {
        weatherData = await response.json();
        getCelsius();
        celsius.addEventListener('click', getCelsius);
        farenheit.addEventListener('click', getFarenheit);
        changeBG();
    } catch (error) {
        alert(weatherData.error.message);
        alert('Please enter a correct Name!')
    }

}

export { weatherData };
export { celsius, farenheit };