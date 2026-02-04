
// Verbergt dobbelstenen en knoppen voordat het spel begint
document.querySelector('#button-higher').style.display = 'none';
document.querySelector('#button-lower').style.display = 'none';
document.querySelector('#score-display').style.display = 'none';
document.querySelector('#click-amount').style.display = 'none';
document.querySelector('#won-round').style.display = 'none';
document.querySelector('#lost-round').style.display = 'none';
document.querySelector('.dice-one').style.display = 'none';
document.querySelector('.dice-two').style.display = 'none';
document.querySelector('#button-restart-round').addEventListener('click', restartGame);
 
// Variabelen
let diceOne;
let diceTwo;
let htmlDiceOne = document.querySelector('.dice-one');
let htmlDiceTwo = document.querySelector('.dice-two');
let winAmount = 0;
let loseAmount = 0;
let clicks = 0;
let score = 0;
let diceResults;
 
//Hiermee roll je de dobbelstenen en word het totaal van dobbelsteen 1&2  en het totaal van dobbelsteen 3&4 opgeteld.
function rollDice() {
    // Dobbelstenen 1 en 2
    let diceOne = Math.floor(Math.random() * 6) + 1;
    let diceTwo = Math.floor(Math.random() * 6) + 1;
    let diceTotalOne = diceOne + diceTwo;
 
    // Dobbelsteen plaatje 1 veranderd naar aanleiding van welk getal er is gerollt.
    switch(diceOne) {
        case 1:
            htmlDiceOne.innerHTML = '&#9856';
            break;
        case 2:
            htmlDiceOne.innerHTML = '&#9857';
            break;
        case 3:
            htmlDiceOne.innerHTML = '&#9858';
            break;
        case 4:
            htmlDiceOne.innerHTML = '&#9859';
            break;
        case 5:
            htmlDiceOne.innerHTML = '&#9860';
            break;
        case 6:
            htmlDiceOne.innerHTML = '&#9861';
            break;
    }
 
    // Dobbelsteen plaatje 2 veranderd naar aanleiding van welk getal er is gerollt.
    switch(diceTwo) {
        case 1:
            htmlDiceTwo.innerHTML = '&#9856';
            break;
        case 2:
            htmlDiceTwo.innerHTML = '&#9857';
            break;
        case 3:
            htmlDiceTwo.innerHTML = '&#9858';
            break;
        case 4:
            htmlDiceTwo.innerHTML = '&#9859';
            break;
        case 5:
            htmlDiceTwo.innerHTML = '&#9860';
            break;
        case 6:
            htmlDiceTwo.innerHTML = '&#9861';
            break;
    }
 
    // Dobbelstenen 3 en 4
    let diceThree = Math.floor(Math.random() * 6) + 1;
    let diceFour = Math.floor(Math.random() * 6) + 1;
    let diceTotalTwo = diceThree + diceFour;
 
    console.log('Dice 1:', diceOne, 'Dice 2:', diceTwo, 'Total 1:', diceTotalOne);
    console.log('Dice 3:', diceThree, 'Dice 4:', diceFour, 'Total 2:', diceTotalTwo);
 
    return { diceTotalOne, diceTotalTwo };
}
 
// Start het spel wanneer op de startknop wordt gedrukt
document.querySelector('#start-button').addEventListener('click', function() {
    document.querySelector('#start-button').style.display = 'none';
    document.querySelector('#button-higher').style.display = 'inline-block';
    document.querySelector('#button-lower').style.display = 'inline-block';
    document.querySelector('#score-display').style.display = 'block';
    document.querySelector('#click-amount').style.display = 'block';
    document.querySelector('.dice-one').style.display = 'block';
    document.querySelector('.dice-two').style.display = 'block';
    diceResults = rollDice();
});
 
// Update de gewonnen of verloren score
function updateScoreDisplay() {
    document.querySelector('#score-display').innerHTML = 'Score: ' + score;
    updateClickAmount();
    if (score === -10) {
        lostGame();
    } else if (score === 10) {
        wonGame();
    }
}
 
// Hoger button en hier een klik functie aan toegevoegd
const myBtn1 = document.querySelector('#button-higher');
myBtn1.addEventListener('click', myFunction1);
 
// Lager button en hier een klik functie aan toegevoegd
const myBtn2 = document.querySelector('#button-lower');
myBtn2.addEventListener('click', myFunction2);
 
 
// functie om de vorige resultaten te weergeven
function displayDiceResults(diceTotalOne, diceTotalTwo) {
    const diceResultsBox = document.querySelector('#dice-results-box');
    let comparison;
 
    if (diceTotalOne > diceTotalTwo) {
        comparison = diceTotalOne + ' > ' + diceTotalTwo;
    } else if (diceTotalOne < diceTotalTwo) {
        comparison = diceTotalOne + ' < ' + diceTotalTwo;
    } else {
        comparison = diceTotalOne + ' = ' + diceTotalTwo;
    }
 
    diceResultsBox.innerHTML = 'Vorig antwoord: ' + comparison;
    diceResultsBox.style.display = 'block';
}
 
// Functie voor de "higher"-knop
function myFunction1() {
    if (diceResults.diceTotalOne >= diceResults.diceTotalTwo) {
        score += 1;
        wonRound();
        document.querySelector('#round-feedback').innerHTML = 'Goed geraden!';
        document.querySelector('#round-feedback').className = 'feedback-green';
    } else {
        score -= 1;
        lostRound();
        document.querySelector('#round-feedback').innerHTML = 'Helaas, verkeerd geraden.';
        document.querySelector('#round-feedback').className = 'feedback-red';
    }
 
    clicks++;
    updateScoreDisplay();
    displayDiceResults(diceResults.diceTotalOne, diceResults.diceTotalTwo);
    diceResults = rollDice();
}
 
// Functie voor de "lower"-knop
function myFunction2() {
    if (diceResults.diceTotalOne < diceResults.diceTotalTwo) {
        score += 1;
        wonRound();
        document.querySelector('#round-feedback').innerHTML = 'Goed geraden!';
        document.querySelector('#round-feedback').className = 'feedback-green';
    } else {
        score -= 1;
        lostRound();
        document.querySelector('#round-feedback').innerHTML = 'Helaas, verkeerd geraden.';
        document.querySelector('#round-feedback').className = 'feedback-red';
    }
 
    clicks++;
    updateScoreDisplay();
    displayDiceResults(diceResults.diceTotalOne, diceResults.diceTotalTwo);
    diceResults = rollDice();
}
 
// Functies voor het updaten van aantal kliks
function updateClickAmount() {
    document.querySelector('#click-amount').innerHTML = 'Kliks: ' + clicks;
}
 
// functie voor het weergeven of je de game gewonnen hebt
function wonRound() {
    document.querySelector('#won-round').innerHTML = 'Je hebt gewonnen!';
}
 
// functie voor het weergeven of je de game verloren hebt
function lostRound() {
    document.querySelector('#lost-round').innerHTML = 'Je hebt verloren!';
}
 
// Functie wanneer het spel is verloren (bij -10)
function lostGame() {
    loseAmount++;
    document.querySelector('#lose-amount').innerHTML = loseAmount;
    document.querySelector('#button-higher').disabled = true;
    document.querySelector('#button-lower').disabled = true;
    document.querySelector('#message-lost').innerHTML = 'Je hebt het spel verloren, wil je opnieuw proberen?';
    document.querySelector('#button-restart-round').style.display = 'block';
    document.querySelector('#round-feedback').innerHTML = '';
}
 
// Functie wanneer het spel is gewonnen (bij +10)
function wonGame() {
    winAmount++;
    document.querySelector('#win-amount').innerHTML = winAmount;
    document.querySelector('#button-higher').disabled = true;
    document.querySelector('#button-lower').disabled = true;
    document.querySelector('#message-won').innerHTML = 'Je hebt het spel gewonnen! Wil je opnieuw proberen?';
    document.querySelector('#button-restart-round').style.display = 'block';
    document.querySelector('#round-feedback').innerHTML = '';
   
}
 
//Functie voor het opnieuw starten van een game waarbij de knoppen disabled worden tot je op de speel opnieuw knop drukt
function restartGame() {
    score = 0;
    document.querySelector('#button-higher').disabled = false;
    document.querySelector('#button-lower').disabled = false;
    document.querySelector('#message-won').innerHTML = '';
    document.querySelector('#message-lost').innerHTML = '';
    document.querySelector('#button-restart-round').style.display = 'none';
    document.querySelector('#round-feedback').innerHTML = '';
    updateScoreDisplay();
}
 
//spelregels tonen/verbergen
const rulesButton = document.querySelector('.rules-button');
const rulesPanel = document.querySelector('.rules-panel');
 
rulesButton.addEventListener('click', function() {
    if (rulesPanel.style.display === 'block') {
        rulesPanel.style.display = 'none';
    } else {
        rulesPanel.style.display = 'block';
    }
});
