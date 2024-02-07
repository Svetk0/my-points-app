const apiKeyWeather = '171c28a2dc0957941680747b5a775d1b';
const apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchInput = document.querySelector(".autocompleteInput");
const searchButton = document.querySelector(".submitBtn");

export default async function checkWeather(city) {
    try {
        const response = await fetch(apiUrlWeather + city + `&appid=${apiKeyWeather}`);
        const data = await response.json();
        console.log(data);
        const currentTimestamp = data.dt;
        console.log('data.dt:  ' + data.dt);

        document.querySelector(".temperature").innerHTML = 'Temperature: ' + Math.round(data.main.temp) + "&#8451";
        document.querySelector(".temperature-feels_like").innerHTML = 'Feels like: ' + Math.round(data.main.feels_like) + "&#8451";
        document.querySelector(".humidity").innerHTML = `Humidity: ` + data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = `Wind: ` + data.wind.speed + "km/h";
    }
    catch (error) {
        console.log(error);
        document.querySelector(".temperature").innerHTML = `Error: No information found`;
        document.querySelector(".temperature-feels_like").innerHTML = ``;
        document.querySelector(".humidity").innerHTML = ``;
        document.querySelector(".wind").innerHTML = ``;
    }
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

const currentDate = document.querySelector('.currentDate');
let Data = new Date();
let year = Data.getFullYear();
let month = Data.getMonth();
let day = Data.getDate();
let hours = zero_first_format(Data.getHours());
let minutes = zero_first_format(Data.getMinutes());

function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

switch (month) {
    case 0: month = "Jan."; break;
    case 1: month = "Feb."; break;
    case 2: month = "Mar."; break;
    case 3: month = "Apr."; break;
    case 4: month = "May"; break;
    case 5: month = "June"; break;
    case 6: month = "July"; break;
    case 7: month = "Aug."; break;
    case 8: month = "Sept."; break;
    case 9: month = "Oct."; break;
    case 10: month = "Nov."; break;
    case 11: month = "Dec."; break;
}

currentDate.innerHTML = "Today is " + day + " " + month + " " + year + "   " + hours + ':' + minutes;