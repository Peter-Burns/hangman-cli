var Letter = require('./letter.js');
function Word(word) {
	this.letters = [];
	this.word = word;
	this.init = function () {
		var holder = this;
		this.word.split('').forEach(function (letter) {
			var newLetter = new Letter(letter);
			holder.letters.push(newLetter);
		});
	};
	this.display = function () {
		var word = '';
		this.letters.forEach(function (letter) {
			word += letter.display() + ' ';
		});
		console.log(word);
	};
	this.guess = function (guess) {
		var correct = false;
		this.letters.forEach(function (letter) {
			if (guess == letter.letter) {
				correct = true;
				letter.guessed = true;
			}
		});
		return correct;
	};
	this.check = function () {
		var done = true;
		this.letters.forEach(function (letter) {
			if (!letter.guessed) done = false;
		});
		return done;
	};
}
module.exports = Word;