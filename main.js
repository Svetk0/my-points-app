
//import './src/scripts/initApp/initSavedCards.js'; //saved cards template
import * as constants from './src/scripts/cityApi/constants.js';
import * as api from './src/scripts/cityApi/apiUtils.js';
import * as print from './src/scripts/cityApi/printDom.js';
import * as localtime from './src/scripts/cityApi/getLocalsTime.js';
import * as err from './src/scripts/cityApi/catchErrors.js';

localtime.currentMyTime();
constants.containerErrors.style.display = 'none';

constants.submitBtn.addEventListener('click', async function () {
    event.preventDefault();
    localtime.currentMyTime();
    
    print.clearCardInfo();

    const loadingSpinner = document.querySelector('.loading-spinner');
    loadingSpinner.style.display = 'block';

    try {
        const dataCityInfo = await api.fetchInfo();
        console.log('Data City Info:', dataCityInfo);
        print.printCityInfo(dataCityInfo);

        const dataCountry = await api.fetchCountry(dataCityInfo.country);
        console.log('Data Country:', dataCountry);
        print.printCountryInfo(dataCountry);

        const dataWeather = await api.fetchWeather();
        console.log('Data Weather:', dataWeather);
        print.printWeatherInfo(dataWeather);
        localtime.localTimeMainCard(dataWeather);

        document.querySelector('#input').value = '';
    } catch (error) {
        constants.containerErrors.style.display = 'flex';
        console.error('Error:', error);
        // Обработка ошибок
        err.checkAll(error);

    } finally {

        loadingSpinner.style.display = 'none';
        document.querySelector('#input').value = '';
    }

});