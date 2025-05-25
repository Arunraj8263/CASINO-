
let cards = []
let sum = 0
let message = ""
let isStart = false
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//object
let player = {
    name:"Per",
    chip:sum
}

let plEl = document.getElementById("pl-el")
plEl.textContent = player.name + ": $" + player.chip
function getRandomCard(){
    let mr= Math.floor(Math.random()*14)

    if(mr == 1) {
        return 11
    }else if(mr > 10){
        return 10
    }else{
        return mr
    }
}

function startGame(){
    if(isAlive && !hasBlackJack && !isStart){
    isStart=true
    let v1 = getRandomCard()
    let v2 = getRandomCard()
    cards.push(v1)
    cards.push(v2)
    sum = v1+v2
    renderGame()
    }
}

function renderGame(){
    sumEL.textContent = "Sum: " + (sum)
    cardsEl.textContent = "Cards: "

    for(let i = 0;i<cards.length;i++){
    cardsEl.textContent += cards[i] +" "
    }

    if(sum <= 20){
        message="Do you want to draw a new card"
    }else if(sum === 21){
        message="Wohoo! You got Blackjack!"
    }else {
        message="You're out of the game: "
        isAlive = false
    }
    messageEl.textContent =  message

}

function newCard(){
    if(isAlive && !hasBlackJack){
        let cv = getRandomCard()
        sum += cv 
        cards.push(cv)
        renderGame()
        console.log("Drawing a new card from the deck!")  
    }
}

