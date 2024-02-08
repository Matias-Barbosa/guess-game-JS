let maximum = parseInt(prompt("Enter the maximum number!"))
while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)

let guess = prompt("Enter your first guess! (Type 'q' to quit)")
let attempts = 1

while (parseInt(guess) !== targetNum) {
    if(guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high, enter a new guess:")
        attempts++
    } else if(isNaN(guess)) {
        guess = prompt("Please enter a valid number:")
        attempts++
    } else {
        guess = prompt("Too low! Enter a new guess:")
    }
}
if (guess === 'q') {
    console.log("Ok, quitting...")
} else {
    console.log("Congrats you did it!")
    console.log(`You got it! It took you ${attempts} guesses`)
}