// Today's forecast is 293 Kelvin
const kelvin = 293

// Convert Kelvin to Celsius
// Kelvin - 273 = Celsius
let celsius = kelvin - 273

// Formula to calculate Fahrenheit
// Celsius x (9/5) + 32 = Fahrenheit
let fahrenheit = celsius * (9/5) + 32

// Round down the value of Fahrenheit
fahrenheit = Math.floor(fahrenheit)

// Display the Fahrenheit temperature
// Using string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
