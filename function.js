// number 
function add() {
    return 10 + 20;
}
console.log(add());
// string
function myString() {
    return "hello string function";
}
console.log(myString());
// array - String
function array() {
    return ['ant', 'cow', 'pig'];
}
console.log(array()[1]);
// array - Number
function arrayNum() {
    return [3, 4, 5];
}
console.log(arrayNum());
// any
function myAny() {
    var students = {
        name: 'Teo',
        grade: 10
    };
    return students;
}
console.log(myAny());
// Function with parameters
function calculate(x, y) {
    var cal = (x + y) / 2;
    console.log(cal);
}
calculate(2, 4);
// Anonymous function
var myInfo = function (x, y) {
    return "Hello " + y + ", are you " + x + " years old?";
};
console.log(myInfo(3, 'Pool'));
// Arrow Function
var arrow = function (x) {
    return x + 11;
};
console.log(arrow(4));
