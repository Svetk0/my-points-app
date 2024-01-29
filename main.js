// main.js
import * as constants from './src/scripts/cityApi/constants.js';
import * as api from './src/scripts/cityApi/apiUtils.js';
import * as print from './src/scripts/cityApi/printDom.js';
import * as localtime from './src/scripts/cityApi/getLocalsTime.js';

localtime.currentMyTime();

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
        console.error('Error:', error);
        // Обработка ошибок
    } finally {
        loadingSpinner.style.display = 'none';
    }
});