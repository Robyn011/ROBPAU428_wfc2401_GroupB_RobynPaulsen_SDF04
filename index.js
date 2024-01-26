let firstCard = Math.floor(Math.random()*10) + 2
let secondCard = Math.floor(Math.random()*10) + 2
let cards = [firstCard, secondCard]//array - order list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let player = {
 name: "Per",
    chips: 200
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



function startGame() {
    renderGame()
}


function renderGame(){
  cardsEl.textContent = "Cards: " 
   for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
  
  
  sumEl.textContent = "Sum: " + sum 
  
  if (sum <= 20) {
  message = "Do you want to draw a new card?"
 
  }
else if (sum === 21){
  message = "You've got BlackJack!"
  hasBlackJack = True
}
else if (sum > 21) {
  message = "You have lost the game"
  let isAlive = false
}
messageEl.textContent = message
}

function newCard() { 
   if (isAlive === true && hasBlackJack === false) {  
  let card = Math.floor(Math.random()*10) + 2
 sum += card
 cards.push(card)
    console.log(cards)
    renderGame()
}
