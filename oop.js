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
