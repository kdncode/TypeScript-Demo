var gameCharacters = /** @class */ (function () {
    // Use constructor To create instance
    function gameCharacters(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    gameCharacters.prototype.run = function () { };
    gameCharacters.prototype.pat = function () { };
    gameCharacters.prototype.show = function () {
        return "Character: " + this.name + " - grade: " + this.grade;
    };
    return gameCharacters;
}());
var character1 = new gameCharacters('Darknight', 22);
var character2 = new gameCharacters('Silverguy', 44);
console.log(character1.show());
console.log(character2.show());
// Create a phone class
var phones = /** @class */ (function () {
    function phones(name, price, rate, color) {
        this.name = name;
        this.price = price;
        this.rate = rate;
        this.color = color;
    }
    phones.prototype.showInfo = function () {
        return "Your phone: " + this.name + " : price: " + this.price + "\n                rating: " + this.rate + " stars & color: " + this.color.length + " colors";
    };
    return phones;
}());
var phone1 = new phones('iPhone X', 1000, 4, ['silver', 'gold', 'red']);
console.log(phone1.showInfo());
