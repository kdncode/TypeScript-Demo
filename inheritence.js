var Cars = /** @class */ (function () {
    function Cars(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
    Cars.prototype.showInfo = function () {
        var myInfo = '';
        for (var i = 0; i < this.color.length; i++) {
            myInfo += this.color[i];
            myInfo += ', ';
        }
        return "Car name: " + this.name + "\n                Price: " + this.price + "\n                color: " + myInfo;
    };
    return Cars;
}());
var honda = new Cars('Honda', 30000, ['green', 'red', 'black', 'white']);
console.log(honda.showInfo());
