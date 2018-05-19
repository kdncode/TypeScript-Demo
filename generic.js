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
// Generic class
var phoneCases = /** @class */ (function () {
    function phoneCases(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    phoneCases.prototype.showCase = function () {
        console.log("id: " + this.id + "\n             name: " + this.name + "\n             price: " + this.price);
    };
    return phoneCases;
}());
var Oppo = new phoneCases(1, 'Oppo Phone', 20);
Oppo.showCase();
var Lg = new phoneCases(2, 'LG Phone', '10 USD');
Lg.showCase();
