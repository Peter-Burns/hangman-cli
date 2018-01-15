var Word = require('./word.js');
var Inquirer = require('inquirer');
var dictionary = ["manager", "champion","soccer","football","goal","field","pitch","cleats","striker","defender","midfielder","goalkeeper","goalie"];
var guesses = [];
function game (turnsLeft){
    if(aiWord.check()){
        console.log('You Win!');
        return playAgain();
    }
    if(turnsLeft == 0){
        console.log('You Lose!');
        return playAgain();
    }
    aiWord.display();
    console.log('Turns Left: ',turnsLeft);
    Inquirer.prompt([{
        type:'input',
        name:'guess',
        message:'Guess a letter:',
        validate: function(value){
            var pass = value.match(/^[a-z]{1}$/i);
            if(pass){
                if(!guesses.includes(value.toLowerCase())){
                    return true;
                }
            }
            return 'Please enter a letter';
        }
    }]).then(function(answers){
        guesses.push(answers.guess.toLowerCase());
        var correct = aiWord.guess(answers.guess.toLowerCase());
        if(correct){
            console.log('\nYou guessed right!');
            game(turnsLeft);
        }
        else{
            console.log('\nNope!');
            game(turnsLeft-1);
        }
    });
}
function start (){
    guesses = [];
    aiWord = new Word (dictionary[Math.floor(Math.random()*dictionary.length)]);
    aiWord.init();
    game(6);
}
function playAgain(){
    Inquirer.prompt([{
        type:'confirm',
        name:'continue',
        message:'Play again?'
    }]).then(function(answer){
        if(answer.continue)start();
    });
}
start();