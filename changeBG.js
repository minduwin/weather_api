// Change background based on the weather condition

import { weatherData } from "./weather.js";
import { fetchWeather } from "./weather.js";

export function changeBG() {
    let container = document.querySelector('.container');

    let rain = 'rain';
    let cloudy = 'cloudy';
    let mist = 'mist';

    if(weatherData.current.condition.text.toLowerCase().includes(cloudy) || 
        weatherData.current.condition.text === 'Overcast') {
        container.style.background = "url('pics/cloudy.jpg') no-repeat";
        container.style.width = '450px';
        container.style.height = '800px';
        container.style.backgroundSize = 'cover';
        container.style.objectFit = 'cover';
        container.style.borderRadius = '10px';
        container.style.position = 'absolute';
    } else if(weatherData.current.condition.text.toLowerCase().includes(rain)) {
        container.style.background = "url('pics/rain.jpg') no-repeat";
        container.style.width = '450px';
        container.style.height = '800px';
        container.style.backgroundSize = 'cover';
        container.style.objectFit = 'cover';
        container.style.borderRadius = '10px';
        container.style.position = 'absolute';
    } else if(weatherData.current.condition.text.toLowerCase().includes(mist) ||
        weatherData.current.condition.text === 'Fog') {
        container.style.background = "url('pics/mist.jpg') no-repeat";
        container.style.width = '450px';
        container.style.height = '800px';
        container.style.backgroundSize = 'cover';
        container.style.objectFit = 'cover';
        container.style.borderRadius = '10px';
        container.style.position = 'absolute';
    } else if(weatherData.current.condition.text === 'Sunny'){
        container.style.background = "url('pics/sunny.jpg') no-repeat";
        container.style.width = '450px';
        container.style.height = '800px';
        container.style.backgroundSize = 'cover';
        container.style.objectFit = 'cover';
        container.style.borderRadius = '10px';
        container.style.position = 'absolute';
    }
}