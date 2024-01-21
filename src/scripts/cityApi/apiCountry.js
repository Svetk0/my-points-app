//https://restcountries.com/v3.1/name/deutschland





const submitBtn = document.querySelector('.submitBtn');
const cityName = document.querySelector('.card-name');
const cityCurrency = document.querySelector('.card-currency');
const countryName = document.querySelector('.card-country');
const mapLocation = document.querySelector('.card-timezone-link');
const containerErrors = document.querySelector('.card-main-error');
// const formContainer = document.querySelector('.form_container');
// const countryInfoContainer = document.querySelector('.countryInfoContainer');
containerErrors.style.display = 'none';
//submitBtn.addEventListener('click', getCountryInfo);



export  function getCountryInfo(country) {
    //let autoCompleteInput = document.querySelector('#input');
    document.querySelector('.card_main').style.display = 'flex';
    console.log('Country input: ' + country);
    getCountryInfoNew(country);
    containerErrors.style.display = 'none';
    cityCurrency.textContent = '';
    countryName.textContent = '';
    mapLocation.href = '';
    cityName.textContent = '';
    //printCityName(autoCompleteInput.value);
    ////document.querySelector('#input').value = '';
}



function printCurrency(currency) {
    cityCurrency.textContent = 'Currency: ' + currency;
}
function printCountryName(countryNameOf) {
    countryName.textContent = 'Country: ' + countryNameOf;
}
function printCityName(city) {
    cityName.textContent = city;
}
function printLocation(location) {
    mapLocation.href = location;
    console.log('location: ' + location);
}

async function getCountryInfoNew(countryName) {
    try {
        const countryResource = await fetch('https://restcountries.com/v3.1/alpha/' + countryName);
        const data = await countryResource.json();
        console.log('----  search by country: ----');
        console.log(data);

        //Print Info
        printCurrency((data[0].currencies[Object.keys(data[0].currencies)[0]].name) + ' (' + (data[0].currencies[Object.keys(data[0].currencies)[0]].symbol) + ')');
        
        //printCityName(data[0].capital);
        printCountryName((data[0].name.common));
        //a link in maps
        printLocation((data[0].maps.googleMaps));

       
    }
    catch (error) { 
        containerErrors.style.display = 'flex';
        console.error('Ошибка в поиске города:', error);
        containerErrors.textContent = 'Ошибка в поиске города: \n' +error.name + ' ----> для полной информации необходимо ввести столицу';
    }
}

//getCountryInfo('ru');