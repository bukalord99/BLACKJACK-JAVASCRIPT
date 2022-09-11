let cards = [];
let sum=0;
let message = ''
let playerEl= document.getElementById('player')
let SG = document.getElementById('startgame')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')
let isAlive= true
let hasBlackJack= false
let players =''
     players ={
        name: 'Ebuka',
        chips: 140
    }

function getRandomCard() {
    let randomcard = Math.floor(Math.random()*13) + 1
    
    if (randomcard > 10 ) {
        return 10
    }
    else if (randomcard===1) {
        return 11
    }
    else {
        return randomcard
    }
 
   
 }  


function startgame() {
    let firstCard= getRandomCard()
    let secondCard= getRandomCard()
    cards =[firstCard, secondCard];// you cannot redeclare a let variable even if it is inside a functions local scope
    sum = firstCard + secondCard;
    hge()
}

function hge() {
    
    sumEl.textContent= 'SUM :' + sum
   cardEl.textContent= 'CARD :'
   playerEl.textContent= players.name + ': $'+ players.chips
   for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + '-'// basically the text content is cards: + the index
    
    } 
    if(sum>21){
        message='You are out of the game';
        isAlive= false;
   }
   else if (sum===21){
       message='Congrats you have blackjack';
       hasBlackJack= true;
   
   }// dont use 'return' when using if conditionals when it is not within a function statement
   else {
       message='Pick another card';
   }
   SG.textContent=message
   
}

function newCard() {
if ( isAlive === true  && hasBlackJack === false) {
        let newc = getRandomCard()
        cards.push(newc);
        sum = sum + newc;
        hge()
    }
   
}