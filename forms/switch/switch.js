//using variable to hold data of first name, state, and temperature (added the number 2 to differentiate it from if/else)
let firstName2 = prompt("What is your first name?")

let state2 = prompt("What state do you live in (2 letters, capitalized NE or FL)?")

let temp2 = prompt("What is the current outside temperature in Fahrenheit?")

let messages2 = [firstName2, state2, temp2]



//messages to output based on the state and temperature received from the user using switch statements
switch (true) {
case (state2 == "NE") && (temp2 < 32):
    console.log(`${firstName2}, wear a warm coat, hat, scarf, and gloves.`)
    break
case (state2 == "NE") && (temp2 >= 32) && (temp2 <= 50):
    console.log(`${firstName2}, wear a warm coat, but you won't need a hat, scarf, or gloves.`)
    break
case (state2 == "FL") && (temp2 >= 32) && (temp2 <= 50):
    console.log(`${firstName2}, wear your warmest coat, a warm hat, scarf, and warm gloves.`)
    break
case (state2 == "FL") && (temp2 >= 50) && (temp2 <= 70):
    console.log(`${firstName2}, wear a warm coat, hat, and gloves. Maybe a scarf too.`)
    break
default: 
    console.log(`Unable to give recommendation.`)
    break
}
