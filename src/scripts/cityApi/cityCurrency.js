



const submitBtn = document.querySelector('.submitBtn');
const cityName = document.querySelector('.card-name');
const cityCurrency = document.querySelector('.card-currency');
// const formContainer = document.querySelector('.form_container');
// const countryInfoContainer = document.querySelector('.countryInfoContainer');

submitBtn.addEventListener('click', enteredCity);

export default function enteredCity() { 
    let autoCompleteInput = document.querySelector('#input');
    console.log('City input: ' + autoCompleteInput.value);
    getCountryData(autoCompleteInput.value);
    printCityName(autoCompleteInput.value);
    document.querySelector('#input').value = '';
}

let countryNames = [];

function printCurrency(currency) { 
    console.log('currency:');
    cityCurrency.textContent = 'Currency: '+currency;
}

function printCityName(city) { 
    console.log('cityName:');
    cityName.textContent = city;

}
async function getCountryData(capitalCity) {
    const countryResource = await fetch('https://restcountries.com/v3.1/capital/' + capitalCity);
    const data = await countryResource.json()
    console.log(data);
    //printCurrency(data.currencies[Object.keys(data[0].currencies)[0]].name);
    //printCurrency(Object.keys(data[0].capital[Object.keys([0])]));

    countryNames = data.map((country) => {
        return country.name.common;
    })

 
}

