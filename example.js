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
