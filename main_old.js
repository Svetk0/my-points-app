 document.querySelector('.card_main').style.display = 'none';

//  import "./src/scripts/cityApi/apiWeather.js";
//  import "./src/scripts/cityApi/usefulInfo.js";
//  import "./src/scripts/cityApi/region.js";

import * as constants from './src/scripts/cityApi/constants.js';
import * as api from './src/scripts/cityApi/apiUtils.js';
import * as print from './src/scripts/cityApi/printDom.js';
import * as localtime from './src/scripts/cityApi/getLocalsTime.js';
localtime.currentMyTime();

//let m = console.log('M: '+time.currentMyTime());

constants.submitBtn.addEventListener('click', async function () {
    {
        localtime.currentMyTime(); //upd client local time
        print.clearCardInfo(); //enable main card
        
        //get info about country code, attractions, and city name
        let dataCityInfo = await api.fetchInfo();
        print.printCityInfo(dataCityInfo);

        //get info about country currency, country name, country location
        let dataCountry = await api.fetchCountry(dataCityInfo.country);
        print.printCountryInfo(dataCountry);
        
        //get info about weather
        let dataWeather = await api.fetchWeather();
        print.printWeatherInfo(dataWeather);
        localtime.localTimeMainCard(dataWeather);
        
        document.querySelector('#input').value = '';

    }
});