



 const submitBtn = document.querySelector('.submitBtn');
// const formContainer = document.querySelector('.form_container');
// const countryInfoContainer = document.querySelector('.countryInfoContainer');

submitBtn.addEventListener('click', enteredCity);

export default function enteredCity() { 
    const autoCompleteInput = document.querySelector('#input');
    console.log('City input: ' + autoCompleteInput.value);
    getCountryData(autoCompleteInput.value);
}

let countryNames = [];


async function getCountryData(capitalCity) {
    const countryResource = await fetch('https://restcountries.com/v3.1/capital/' + capitalCity);
    const data = await countryResource.json()
     console.log(data);

    countryNames = data.map((country) => {
        return country.name.common;
    })

 
}

