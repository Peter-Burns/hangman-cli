function Letter (letter){
	this.guessed = false;
	this.letter = letter;
}
Letter.prototype.display =  function (){
	return this.guessed ? this.letter : '_';
};
module.exports = Letter;