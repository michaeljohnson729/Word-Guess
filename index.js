var Word = require("./word");
var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "Guess a letter!",
        name: "userGuess"
    }
]).then( function(inquirerResponse){
    var userGuess = "";
    userGuess = inquirerResponse.userGuess;
    
})
