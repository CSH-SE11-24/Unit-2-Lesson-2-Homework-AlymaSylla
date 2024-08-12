// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let creation = "superb"
// Create a new variable called attempts and set it to 0
let attempts = 0
// Prompt the user to guess a letter
let letter = prompt("Guess a letter")
// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if (creation.includes(letter)) {
  console.log("Your letter is in the word")
} else {
  console.log("Your letter is not in the word")
}

// Prompt the user to guess the word 
let user = prompt("Guess the word")
// Increase attempts by 1
attempts++


// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if (creation == user) {
  console.log("Correct you have identified the right word")
} else {
  console.log("Try again, guess a different word")
}

// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter
while (user != creation) {
  letter = prompt("Try again, guess a different letter")
  if (creation.includes(letter)) {
    console.log("Your letter is in the word")
  }
  { user = prompt("Try again, guess a different word") }
  attempts++
}
// In the while loop, copy the prompt and if/else check for the word
// while(creation!=user){user = prompt("Try again, guess a different word")}


// In the while loop, copy the attempts increment




// After the while loop, print "It took (attempts) attempts" 

console.log("It took",attempts,"attempts" )