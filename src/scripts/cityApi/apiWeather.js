
const apiKeyWeather = '171c28a2dc0957941680747b5a775d1b';
const apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchInput = document.querySelector(".autocompleteInput");
const searchButton = document.querySelector(".submitBtn");

export default async function checkWeather (city) {
    const response = await fetch(apiUrlWeather + city + `&appid=${apiKeyWeather}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "&#8451";
    document.querySelector(".humidity").innerHTML =`Humidity: ` + data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = `Wind: ` + data.wind.speed + "km/h";
}

searchButton.addEventListener("click", () => {
    checkWeather(searchInput.value);
    //searchInput.value = "";
    });
    
searchInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        checkWeather(searchInput.value);
        //searchInput.value = "";
    }
    });