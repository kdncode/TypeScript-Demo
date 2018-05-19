// Normal functions
function add(x) {
    return x;
}
function add1(x) {
    return x;
}
// Generic in function -> for flexible 
function add2(x) {
    return x;
}
console.log(add(11));
console.log(add1("Hello"));
console.log(add2("Hihih Generic"));
console.log(add2(99));
// Generic in class 
var Computers = /** @class */ (function () {
    function Computers() {
    }
    Computers.showInfo = function (x) {
        console.log(x);
    };
    return Computers;
}());
Computers.showInfo(['Macbook', 'Dell', 'HP']);
Computers.showInfo(['Macbook', 4000, true]);
