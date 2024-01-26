
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
  let card = Math.floor(Math.random()*10) + 2
 sum += card
 cards.push(card)
    console.log(cards)
    renderGame()
}
