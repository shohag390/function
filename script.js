// function inchToFeet(inch) {
//     const feet = inch / 12;
//     const fullNumber = parseInt(feet);
//     const inchConvart = inch % 12;
//     const result = fullNumber + "ft " + inchConvart + "inch";
//     return result;
// }

// const shohagHeight = inchToFeet(120);

// console.log(shohagHeight);


function isLeapYear(year) {
    if ((year % 100 !== 0 && year % 4 === 0) || (year % 400 === 0 && year % 100 === 0)) {
        return true;
    } else {
        return false;
    }
}

const isLeap = isLeapYear(2100)

console.log(isLeap);
