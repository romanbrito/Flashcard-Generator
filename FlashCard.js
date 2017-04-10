var inquirer = require("inquirer");
var fs = require("fs");
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

function main () {
    inquirer.prompt([{
        type: 'list',
        name: 'userInput',
        message: 'What would you like to do',
        choices: ['create basic card', 'create cloze card', 'quit']
    }]).then(function (selection) {
        if (selection.userInput === 'create basic card') {
            console.log('create cards');
            var newBasicCard = new BasicCard('empty', 'empty');
            newBasicCard.create();
        } else if (selection.userInput === 'create cloze card') {
            console.log('create cloze card');
            var newClozeCard = new ClozeCard('empty', 'empty');
            newClozeCard.create();
        } else if (selection.userInput === 'basic quiz') {
            console.log('basic quiz');
        } else if (selection.userInput === 'cloze quiz') {
            console.log('cloze quiz');
        } else if (selection.userInput === 'quit') {
            console.log('quit');
        }
    })
}

main();