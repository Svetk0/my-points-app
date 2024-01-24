 document.querySelector('.card_main').style.display = 'none';

//  import "./src/scripts/cityApi/apiWeather.js";
//  import "./src/scripts/cityApi/usefulInfo.js";
//  import "./src/scripts/cityApi/region.js";

import * as constants from './src/scripts/cityApi/constants.js';
import { fetchData } from './src/scripts/cityApi/apiUtils.js';

//constants.searchInput.value = 'de';

//fetchData(constants.apiUrlCountry);
function updateSubmit() { 
    return constants.searchInput.value = document.querySelector('#input').value;
}

constants.submitBtn.addEventListener('click', function () {
     {
        updateSubmit();
        console.log('search: '+constants.searchInput.value);
        fetchData(constants.apiUrlCountry);
    }
});