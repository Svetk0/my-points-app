// apiUtils.js
import * as constants from './constants.js';
const cityInfo = constants.cityInfo;
//const searchInput = document.querySelector('#input').value;
        
export async function fetchCountry(searchInput) {
    try {
        const fetchUrl = constants.apiUrlCountry + searchInput;
      const response = await fetch(fetchUrl);
        const data = await response.json();
        console.log('search input Code Country:  '+searchInput);
        //console.log(data);
      return data;
    } catch (error) {
      console.error('in fetch Country:', error.message);
      throw error;
    }
}

export async function fetchWeather() {
    try {
        const searchInput = document.querySelector('#input').value;
        const fetchUrl = constants.apiUrlWeather + searchInput + `&appid=${constants.apiKeyWeather}`;
      const response = await fetch(fetchUrl);
        const data = await response.json();
        console.log('search input Weather:  '+searchInput);
        //console.log(data);
      return data;
    } catch (error) {
      console.error('Ошибка запроса in fetch Weather:', error);
      throw error;
    }
}

export async function fetchInfo() {
    try {
        const searchInput = document.querySelector('#input').value;
        const data = await apiGet("geoname", `name=${searchInput}`);
        console.log('search input Info:  '+searchInput);
        //console.log(data);

        // get attraction info
        const lon = data.lon;
        const lat = data.lat;
        const attractionsData = await apiGet("radius", `radius=1000&lon=${lon}&lat=${lat}&format=json&limit=5`);
        console.log('Достопримечательности:', attractionsData);
  
        if (Array.isArray(attractionsData) && attractionsData.length > 0) {
          const attractions = attractionsData.map(attraction => attraction.name).join(', ');
          cityInfo.textContent = `Attractions: ${attractions}`;
        } else {
          cityInfo.textContent = 'Данные о достопримечательностях отсутствуют в ответе API';
        }
      return data;
    } catch (error) {
      console.error('Ошибка запроса in fetch Info:', error);
      throw error;
    }
}

  function apiGet (method, query) {
    return new Promise(function (resolve, reject) {
        let fetchUrl = constants.apiUrlAttractions + method + "?apikey=" + constants.apiKeyAttractions;
        
  
      if (query !== undefined) {
          fetchUrl += `&${query}`;
          
      }
  
      fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch(function (error) {
          reject(error);
          console.error('Ошибка запроса:', error);
          cityInfo.textContent = 'Произошла ошибка при запросе к API';
        });
    });
}
    
