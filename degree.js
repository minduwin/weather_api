// Toggle Celsius to Farenheit

import { weatherData } from "./weather.js";
import { celsius, farenheit } from "./weather.js";

let city = document.querySelector('.city');
let state = document.querySelector('.state');
let country = document.querySelector('.country');


let temp = document.querySelector('.temp');
let tempDesc = document.querySelector('.tempDesc');
let realTemp = document.querySelector('.realTemp');
let feelsLike = document.querySelector('.feelsLike');
let humidity = document.querySelector('.humidity');
let mBar = document.querySelector('.mBar');
let vis = document.querySelector('.vis');
let winSpeed = document.querySelector('.winSpeed')

export function getCelsius() {
    city.textContent = weatherData.location.name;
    state.textContent = `${weatherData.location.region}, `;
    country.textContent = weatherData.location.country;
    temp.textContent = `${weatherData.current.temp_c}º`;
    tempDesc.textContent = weatherData.current.condition.text;
    realTemp.textContent = `${weatherData.current.temp_c}º`;
    feelsLike.textContent = `${weatherData.current.feelslike_c}º`;
    humidity.textContent = `${weatherData.current.humidity}%`;
    mBar.textContent = `${weatherData.current.pressure_mb} mBar`;
    vis.textContent = `${weatherData.current.vis_km} km`;
    winSpeed.textContent = `${weatherData.current.wind_kph} km/h`;
}

export function getFarenheit() {
    city.textContent = weatherData.location.name;
    temp.textContent = `${weatherData.current.temp_f}º`;
    tempDesc.textContent = weatherData.current.condition.text;
    realTemp.textContent = `${weatherData.current.temp_f}º`;
    feelsLike.textContent = `${weatherData.current.feelslike_f}º`;
    humidity.textContent = `${weatherData.current.humidity}%`;
    mBar.textContent = `${weatherData.current.pressure_mb} mBar`;
    vis.textContent = `${weatherData.current.vis_miles} miles`;
    winSpeed.textContent = `${weatherData.current.wind_mph} mph`;
}
