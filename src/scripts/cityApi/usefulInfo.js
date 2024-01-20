
const apiKey = "5ae2e3f221c38a28845f05b67a4efd428d2e3973acfdb186db7def8c";
const cityInfo = document.querySelector('.card-info');

export default function apiGet(method, query) {
  console.log('query: ' + query);

  return new Promise(function(resolve, reject) {
    var otmAPI = "https://api.opentripmap.com/0.1/en/places/" + method + "?apikey=" + apiKey;

    if (query !== undefined) {
      otmAPI += `&${query}`;
    }

    fetch(otmAPI)
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(function(error) {
        reject(error);
        console.error('Ошибка запроса:', error);
        cityInfo.textContent = 'Произошла ошибка при запросе к API';
      });
  });
}

document.querySelector('.submitBtn').addEventListener('click', function() {
  const cityName = document.getElementById('input').value;

  apiGet("geoname", `name=${cityName}`)
    .then(data => {
      console.log('Данные по городу:', data);

      if (data.error) {
        cityInfo.textContent = 'Город не найден в базе данных OpenTripMap';
        return;
      }

      const lon = data.lon;
      const lat = data.lat;

      apiGet("radius", `radius=1000&lon=${lon}&lat=${lat}&format=json&limit=5`)
        .then(attractionsData => {
          console.log('Достопримечательности:', attractionsData);

          if (Array.isArray(attractionsData) && attractionsData.length > 0) {
            const attractions = attractionsData.map(attraction => attraction.name).join(', ');
            cityInfo.textContent = `Attractions: ${attractions}`;
          } else {
            cityInfo.textContent = 'Данные о достопримечательностях отсутствуют в ответе API';
          }
        })
        .catch(error => {
          console.error('Ошибка получения данных о достопримечательностях:', error);
          cityInfo.textContent = 'Произошла ошибка при запросе к API (достопримечательности)';
        });
    })
    .catch(error => {
      console.error('Ошибка получения данных по этому городу:', error);
      cityInfo.textContent = 'Произошла ошибка при запросе к API';
    });
});
