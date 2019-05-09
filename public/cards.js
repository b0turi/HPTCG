function Card(cardName, image, cardType, actions = 1, power = 0, subject = "None", func = null) {
	this.cardName = cardName;
	this.image = image;
	this.cardType = cardType;

	this.onPlay = func;
}

function Lesson(subject, image) {
	Card.call(this, subject + " Lesson", "Lesson", 1, 0, subject, function(){

	});
}