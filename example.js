var a;
a = 5;
console.log(a);
/* Array */
var students;
students = ['John', 'Joanna', 'Teo'];
for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
}
/* Number */
var myNumber = [2, 3, 5];
for (var i = 0; i < myNumber.length; i++) {
    console.log(myNumber[i]);
}
/* Boolean */
var flag = true;
console.log(flag);
/* Enum */
var myStatus;
(function (myStatus) {
    myStatus[myStatus["newUser"] = 0] = "newUser";
    myStatus[myStatus["addToCart"] = 1] = "addToCart";
})(myStatus || (myStatus = {}));
;
console.log(myStatus.newUser);
/* Tuple is a mix of both string & number */
var newStudents;
newStudents = ['Hero', 22];
console.log(newStudents);
/* Any */
var x;
x = "Hello Any Type";
x = 100;
x = ['hihi', 900];
x = {
    name: 'Super Man',
    age: 10
};
console.log(x);
/* Void -> No return in func */
function add() {
    console.log('Hello Void');
    return 400;
}
add();
/* Parse */
var abc = "This is the best";
console.log(abc.length);
