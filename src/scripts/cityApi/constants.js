//=====    Search form    ======
export const submitBtn = document.querySelector('.submitBtn');
//export const searchInput = document.querySelector('#input');

//=====    API keys and URLs    ======
export const apiKeyWeather = '171c28a2dc0957941680747b5a775d1b';
export const apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
export const apiUrlAttractions = 'https://api.opentripmap.com/0.1/en/places/';
export const apiKeyAttractions = '5ae2e3f221c38a28845f05b67a4efd428d2e3973acfdb186db7def8c';
export const apiUrlCountry = 'https://restcountries.com/v3.1/alpha/'; 

//fetch preparations
// export const fetchWeather = apiUrlWeather + searchInput.value + `&appid=${apiKeyWeather}`;
// export const fetchCountry = apiUrlCountry + searchInput.value;
//====    main card DOM  =====
//main card description
export const cityName = document.querySelector('.card-name');
export const cityCurrency = document.querySelector('.card-currency');
export const countryName = document.querySelector('.card-country');
export const mapLocation = document.querySelector('.card-timezone-link');
export const containerErrors = document.querySelector('.card-main-error');
export const cityInfo = document.querySelector('.card-timezone');

//main card weather
export const cityTemperature = document.querySelector(".temperature");
export const cityTempFeelsLike = document.querySelector(".temperature-feels_like");
export const cityHumidity = document.querySelector(".humidity");
export const cityWind = document.querySelector(".wind");

