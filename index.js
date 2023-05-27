function getRandomCard() {
    let j =  Math.floor(Math.random() * 13 ) + 1;
    if (j === 1) {
        return 11
    } else if (j === 11 || j ===12 || j === 13){
        return 10
    } else {
        return j
    }
  }
  
//   let firstCard = getRandomCard()
//   let secondCard = getRandomCard()
  let cards = []
  let sum = 0
  let hasBlackJack = false
  let isAlive = false
  let message = ""
  let messageEl = document.querySelector("#message-el")
  let sumEl = document.querySelector("#sum-el")
  let cardsEl = document.querySelector("#cards-el")
  let playerEl = document.querySelector("#player-el")

  let player = {
    name: "Kavan",
    chips: 145
  }

  playerEl.textContent = player.name + ": $" + player.chips

  function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    isAlive = true
    renderGame()
  }
 
 function renderGame(){ 
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i+=1){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
 }

 function newCard(){
        if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
 }