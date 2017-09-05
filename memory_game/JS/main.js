console.log("Up and running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var matchesMade = 0;
var noMatch = 0;
var checkForMatch = function(){
	if (cardsInPlay[0]=== cardsInPlay[1]){
		alert("You found a match!");
		matchesMade ++;
		document.getElementById('wins').innerHTML= matchesMade;
		}else{
		alert("Sorry, try again.");
		document.getElementById('losses').innerHTML= noMatch;
		noMatch ++;
		}
};
var flipCard = function (){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2){
		checkForMatch();
		}
};

var createBoard = function(){
	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	};
};
createBoard();
resetBoard = function(){
	console.log('user reset the board');
	for (var i=0; i<cards.length; i++){
		document.getElementsByTagName('img')[i].setAttribute('src', "images/back.png");
		cardsInPlay=[];
	}
};
var resetButtonActivate = function(){
		var resetButton = document.getElementById('resetbutton');
		resetButton.addEventListener('click', resetBoard);
		console.log('reset button is active');
	}

resetButtonActivate();