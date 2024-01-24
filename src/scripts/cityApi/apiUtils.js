// apiUtils.js
import * as constants from './constants.js';

export async function fetchData(url) {
    try {
      const response = await fetch(url + constants.searchInput.value);
        const data = await response.json();
        console.log('search input:  '+constants.searchInput.value);
        console.log(data);
      return data;
    } catch (error) {
      console.error('Ошибка запроса:', error);
      throw error;
    }
}
    
