// Static: helps to access property & method without
// creating new instances
// Create a phone class
var Phones = /** @class */ (function () {
    function Phones(name, price, rate, color) {
        this.name = name;
        this.price = price;
        this.rate = rate;
        this.color = color;
    }
    // showInfo() {
    //     return `Your phone: ${this.name} : price: ${this.price}
    //             rating: ${this.rate} stars & color: ${this.color.length} colors`
    // }
    Phones.testStatic = function () {
        return "Hello Static";
    };
    Phones.name = 'My New Samsung';
    Phones.price = 33;
    return Phones;
}());
// var phone1 = new phones('iPhone X', 1000, 4, ['silver', 'gold', 'red'])
console.log(Phones.name);
console.log(Phones.price);
console.log(Phones.testStatic());
