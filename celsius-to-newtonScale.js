/* Converting Celsius to Newton scale */
let celsius = 4 // Control the celsius here

// Formula to convert Celsius to Newton
// Celsius x ( 33 / 100 ) = Newton
let newton = celsius * ( 33 / 100 )

// Round down the value of Newton temperature
newton = Math.floor(newton)

// Display the result
console.log(`The temperature is ${newton} Newton scale.`)
