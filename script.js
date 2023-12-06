// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
// Function to check the user's guess
function checkGuess(guess) {
  if (guess < randomNumber) {
    return "Too low! Try a higher number.";
  } else if (guess > randomNumber) {
    return "Too high! Try a lower number.";
  } else {
    return "Congratulations! You guessed the correct number!";
  }
}
console.log(checkGuess(57));
