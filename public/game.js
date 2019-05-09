function Player(deck, start_char) {
	this.deck = deck,
	this.discardPile = [],
	this.hand = [],
	this.lessons = [],
	this.creatures = [],
	this.items = [],
	this.adventures = [],
	this.characters = [start_char],

	this.draw = function(num = 1) {
		for(var i = 0; i < num; i++) {
			var topCard = this.deck.pop();
			this.hand.unshift(topCard);
		}
	}

	this.damage = function(num = 1) {
		for(var i = 0; i < num; i++) {
			var topCard = this.deck.pop();
			this.discardPile.unshift(topCard);
		}
	}

	this.discard = function(index) {
		var card = this.hand.splice(index, 1);
		this.discardPile.unshift(card);
	}
}

var p1 = new Player([1,2,3,4,5,6,7,8,9,10], 85);
p1.deck = shuffle(p1.deck);

alert(p1.deck);
p1.damage(2);
alert(p1.discardPile);


function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}