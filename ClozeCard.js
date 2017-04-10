// Constructor function for Cloze card
var inquirer = require("inquirer");
var fs = require("fs");

function ClozeCard (text, cloze) {
    this.text = text;
    this.cloze = cloze;
}

ClozeCard.prototype.clozeDeleted = function () {
    console.log('Cloze: ' + this.cloze);
};

ClozeCard.prototype.partialText = function () {
    this.partial = this.text.replace(this.cloze, '_____');
    console.log('Parital: ' + this.partial);
};

ClozeCard.prototype.fullText = function () {
    console.log('FullText: ' + this.text);

};

ClozeCard.prototype.err = function () {
    if(ClozeCard.parital === null){
        // broken Cloze
    }
};

ClozeCard.prototype.create = function () {
    var CardArray = [];

    inquirer.prompt([{
        type: 'input',
        name: 'FullText',
        message: 'Input the full text'
    },{
        type: 'input',
        name: 'Cloze',
        message: 'Input the cloze'
    }]).then(function (answers) {
        this.text = answers.FullText;
        this.cloze = answers.Cloze;
        appendObject(answers, './cloze.json');
    })
};

function appendObject(obj, file) {
    var CardFile = fs.readFileSync(file);
    // initial file is []
    var Card = (JSON.parse(CardFile));
    Card.push(obj);
    fs.writeFileSync(file,JSON.stringify(Card));
}

module.exports = ClozeCard;