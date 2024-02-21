//Variable: Number of Kelvin
const kelvin = 310;

//Variable: Kelvin converted to Celsius
const celsius = kelvin - 273;

//Variable: Celsius converted to Fahrenheit
let fahrenheit = celsius * 9 / 5 + 32;

//Method to round down calculation
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);