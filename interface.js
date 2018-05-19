// Use interface to declare the common name
// for a group to make sure all dev use the same name
function showInfo(student) {
    console.log("\n        Hello " + student.name + ", are you " + student.age + " years old?\n    ");
}
showInfo({ name: 'John', age: 33 });
// Implements interface -> class -> Must have all the props & methods
// above & may expand more 
var Apple = /** @class */ (function () {
    function Apple() {
    }
    Apple.prototype.showInfo = function () {
        console.log('Check Apple Phone Info');
    };
    Apple.prototype.showPrice = function (price) {
        return "Too expensive";
    };
    Apple.prototype.showDes = function () {
        console.log('Nice phone tho');
    };
    return Apple;
}());
