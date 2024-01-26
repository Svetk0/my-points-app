import * as constants from './constants.js';

export function currentMyTime() {
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

    constants.currentDate.innerHTML = "Today is " + day + " " + month + " " + year + "   " + hours + ':' + minutes;
}