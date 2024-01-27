import moment from 'moment-timezone';

// let moment = require('moment-timezone');
// moment().tz("America/Los_Angeles").format();

export default function testLibs() { 
    console.log(moment().format());
}

testLibs();