// Constructor function for basic card
var inquirer = require("inquirer");
var fs = require("fs");

function BasicCard (front, back) {
    this.front = front;
    this.back = back;
}

BasicCard.prototype.printFront = function () {
    console.log('Front: ' + this.front);
};

BasicCard.prototype.printBack = function () {
    console.log('Back: ' + this.back);
};

BasicCard.prototype.create = function () {
    var CardArray = [];

    inquirer.prompt([{
        type: 'input',
        name: 'Front',
        message: 'Input the front of the card'
    },{
        type: 'input',
        name: 'Back',
        message: 'Input the back of the card'
    }]).then(function (answers) {
        appendObject(answers, './log.json');
    })
};


function appendObject(obj, file) {
    var CardFile = fs.readFileSync(file);
    // initial file is []
    var Card = (JSON.parse(CardFile));
    Card.push(obj);
    fs.writeFileSync(file,JSON.stringify(Card));
}

module.exports = BasicCard;