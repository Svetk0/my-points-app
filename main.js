 document.querySelector('.card_main').style.display = 'none';

//  import "./src/scripts/cityApi/apiWeather.js";
//  import "./src/scripts/cityApi/usefulInfo.js";
//  import "./src/scripts/cityApi/region.js";

import * as constants from './src/scripts/cityApi/constants.js';
import * as api from  './src/scripts/cityApi/apiUtils.js';

//constants.searchInput.value = 'de';

//fetchData(constants.apiUrlCountry);
function updateSubmit() { 
    return constants.searchInput.value = document.querySelector('#input').value;
}

constants.submitBtn.addEventListener('click', async function () {
    {
        //get info about country code, attractions, and city name
        let dataCountryInfo = await api.fetchInfo();

        //get info about country currency, country name, country location
        let dataCountry = await api.fetchCountry(dataCountryInfo.country);
        
        
        let dataWeather = await api.fetchWeather();
        // console.log('dataWeather: ' + dataWeather);
        // console.log(dataWeather);
        
      

    }
});