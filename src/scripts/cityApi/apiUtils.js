// apiUtils.js
import * as constants from './constants.js';
const cityInfo = constants.cityInfo;
//const searchInput = document.querySelector('#input').value;
        
export async function fetchCountry(searchInput) {
    try {
         //searchInput = document.querySelector('#input').value;
        const fetchUrl = constants.apiUrlCountry + searchInput;
      const response = await fetch(fetchUrl);
        const data = await response.json();
        console.log('search input Code Country:  '+searchInput);
        //console.log(data);
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
        console.log('search input Weather:  '+searchInput);
        //console.log(data);
      return data;
    } catch (error) {
      console.error('Ошибка запроса in fetchWeather:', error);
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
      console.error('Ошибка запроса in fetchInfo:', error);
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
  
// export async function fetchInfo_old () {
//     const searchInput = document.querySelector('#input').value;
//     const cityInfo = constants.cityInfo;
  
//     apiGet("geoname", `name=${searchInput}`)
//       .then(data => {
//         console.log('fetchInfo: Данные по городу:', data);
  
//         if (data.error) {
//           cityInfo.textContent = 'Город не найден в базе данных OpenTripMap';
//           return data;
//         }
  
//         const lon = data.lon;
//           const lat = data.lat;
//           //console.log('return data: ' + data.country);
//           fetchCountry(data.country);
  
//         apiGet("radius", `radius=1000&lon=${lon}&lat=${lat}&format=json&limit=5`)
//           .then(attractionsData => {
//             console.log('Достопримечательности:', attractionsData);
  
//             if (Array.isArray(attractionsData) && attractionsData.length > 0) {
//               const attractions = attractionsData.map(attraction => attraction.name).join(', ');
//               cityInfo.textContent = `Attractions: ${attractions}`;
//             } else {
//               cityInfo.textContent = 'Данные о достопримечательностях отсутствуют в ответе API';
//             }
//           })
//           .catch(error => {
//             console.error('Ошибка получения данных о достопримечательностях:', error);
//             cityInfo.textContent = 'Произошла ошибка при запросе к API (достопримечательности)';
//           });
//      })
//       .catch(error => {
//         console.error('Ошибка получения данных по этому городу:', error);
//         cityInfo.textContent = 'Произошла ошибка при запросе к API';
//       });
    
//   };
    
