console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[3];
var cardTwo = cards[2]

cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne)
cardsInPlay.push(cardTwo)
console.log("User flipped " + cardTwo)

if (cardsInPlay.length === 2){
	if (cardsInPlay[0]=== cardsInPlay[1]){
		alert("You found a match!")
	}else{
		alert("Sorry, try again.")
	}
}