
const apiKey = "5ae2e3f221c38a28845f05b67a4efd428d2e3973acfdb186db7def8c";
const cityInfo = document.querySelector('.card-timezone');

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
      console.log('Geoname Data:', data);
      cityInfo.textContent = `Region: ${data.timezone}`;
    })
    .catch(error => {
      console.error('Error fetching Geoname data:', error);
      cityInfo.textContent = 'Произошла ошибка при запросе к API';
    });
});

