let firstCard = Math.floor(Math.random()*10) + 2
let secondCard = Math.floor(Math.random()*10) + 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true 
let message = ""
if (sum <= 21) {
  message = "Do you want to draw a new card?"
 
  }
else if (sum === 21){
  message = "Wohoo! You've got BlackJack!"
  hasBlackJack = True
}
else if (sum > 21) {
  message = "You have lost the game"
  let isAlive = false
}

console.log(message) 
