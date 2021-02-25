//using variable to hold data of first name, state, and temperature
let firstName = prompt("What is your first name?")

let state = prompt("What state do you live in (2 letters, capitalized NE or FL)?")

let temp = prompt("What is the current outside temperature in Fahrenheit?")

let messages = [firstName, state, temp]

//messages to output based on the state and temperature received from the user using if/else statements. There are 4 outcomes: 
if (state === 'NE' && temp < 32)
    console.log(`${firstName}, wear a warm coat, hat, scarf, and gloves.`)
else if (state === 'NE' && temp >= 32 && temp <= 50)
    console.log(`${firstName}, wear a warm coat, but you won't need a hat, scarf, or gloves.`)
else if (state === 'FL' && temp >= 32 && temp <= 50)
    console.log(`${firstName}, wear your warmest coat, a warm hat, scarf, and warm gloves.`)
else if (state === 'FL' && temp >= 50 && temp <= 70)
    console.log(`${firstName}, wear a warm coat, hat, and gloves. Maybe a scarf too.`)
else 
    console.log(`Unable to give recommendation.`)