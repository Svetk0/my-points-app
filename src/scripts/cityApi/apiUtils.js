// apiUtils.js
import * as constants from './constants.js';

//const fetchWeather = constants.apiUrlWeather + searchInput + `&appid=${constants.apiKeyWeather}`;


export async function fetchCountry() {
    try {
        const searchInput = document.querySelector('#input').value;
        const fetchUrl = constants.apiUrlCountry + searchInput;
      const response = await fetch(fetchUrl);
        const data = await response.json();
        console.log('search input:  '+searchInput);
        console.log(data);
      return data;
    } catch (error) {
      console.error('Ошибка запроса in fetchCountry:', error);
      throw error;
    }
}

export async function fetchWeather() {
    try {
        const searchInput = document.querySelector('#input').value;
        const fetchUrl = constants.apiUrlWeather + searchInput + `&appid=${constants.apiKeyWeather}`;
      const response = await fetch(fetchUrl);
        const data = await response.json();
        console.log('search input weather:  '+searchInput);
        console.log(data);
      return data;
    } catch (error) {
      console.error('Ошибка запроса in fetchWeather:', error);
      throw error;
    }
}
    
