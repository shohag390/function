function inchToFeet(inch) {
    const feet = inch / 12;
    const fullNumber = parseInt(feet);
    const inchConvart = inch % 12;
    const result = fullNumber + "ft " + inchConvart + "inch";
    return result;
}

const shohagHeight = inchToFeet(120);

console.log(shohagHeight);
