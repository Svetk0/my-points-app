import * as constants from './constants.js';

function getUserTime(t) {
    let Y = t.getFullYear();
    let M = numToMonth(t.getMonth());
    let D = t.getDate();
    let h = zero_first_format(t.getHours());
    let min = zero_first_format(t.getMinutes());

    function zero_first_format(value) {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    }
    function numToMonth(month) { 

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
        return month;
    }
    return `${D} ${M} ${Y} ${h}:${min}`
}
 
export function currentMyTime() {
    let Data = new Date();
    constants.currentDate.innerHTML = "Today is " +getUserTime(Data);
}

export function localTimeMainCard(apiDataWeather) { 
    console.log('====  localTimeMainCard ===');
    console.log(apiDataWeather.timezone, ' ', apiDataWeather.dt);



    constants.cityTimezone.textContent =  'Local Time: '+ getUserTime(new Date (1706291561000));

}