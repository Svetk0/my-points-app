import * as constants from './constants.js';


export  function clearCardInfo () {
    
    document.querySelector('.card_main').style.display = 'flex';

    constants.containerErrors.style.display = 'none';
    constants.countryCurrency.textContent = '';
    constants.countryName.textContent = '';
    constants.mapLocationLink.href = '';
    //constants.mapLocationLink.textContent = '';
    //constants.mapLocation.textContent = '';
    constants.cityName.textContent = '';
    constants.cityInfo.textContent = '';
    constants.cityTimezone.textContent = '';

    constants.cityTemperature.textContent = '';
    constants.cityTempFeelsLike.textContent = '';
    constants.cityHumidity.textContent = '';
    constants.cityWind.textContent = '';
 
}

export function printCountryInfo(data) { 
    let currency = (data[0].currencies[Object.keys(data[0].currencies)[0]].name) + ' (' + (data[0].currencies[Object.keys(data[0].currencies)[0]].symbol) + ')';


    constants.countryCurrency.textContent = 'Currency: ' + currency;
    //constants.mapLocation.textContent = 'Location: ';
    //constants.mapLocationLink.style.display= 'block';
    constants.mapLocationLink.href = data[0].maps.googleMaps;
    constants.countryName.textContent = 'Country: '+ data[0].name.common;
}

export function printWeatherInfo(data) { 
    constants.cityTemperature.innerHTML = 'Temperature: ' +Math.round(data.main.temp) + "&#8451";
    constants.cityTempFeelsLike.innerHTML = 'Feels like: ' + Math.round(data.main.feels_like) + "&#8451";
    constants.cityHumidity.textContent = `Humidity: ` + data.main.humidity + "%";
    constants.cityWind.textContent = `Wind: ` + data.wind.speed + " km/h";
}

export function printCityInfo(data) { 
    constants.cityName.textContent = data.name;
}


