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
       
        // let dataCountry = await api.fetchCountry();
        // console.log('dataCountry: ' + dataCountry);
        // console.log(dataCountry);
        
        // let dataWeather = await api.fetchWeather();
        // console.log('dataWeather: ' + dataWeather);
        // console.log(dataWeather);
        //let cityName = 'paris';
        let dataCountryInfo = await api.fetchInfo();
        console.log(dataCountryInfo);
    }
});