// // Create a class
// class Cars {
//     name: string;
//     price: number;
//     color: string [];
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     constructor(name: string, price: number, color: string[]) {
//         this.name = name;
//         this.price = price;
//         this.color = color;
//     }
//     showInfo() {
//         let myInfo : string = '';
//         for (let i = 0; i < this.color.length; i++) {
//             myInfo += this.color[i];
//             myInfo += ', '
//         }
//         return `Car name: ${this.name}
//                 Price: ${this.price}
//                 color: ${myInfo}`
//     }
// }
// let honda = new Cars('Honda', 30000, ['green', 'red', 'black', 'white'])
// let toyota = new Cars('Toyota', 20000, ['gold', 'orange', 'gray'])
// console.log(honda.showInfo());
// console.log(toyota.showInfo());
// Inheritence 
// class Moto extends Cars {
//     tire: number;
//     constructor(name: string, price: number, color: string[], tire: number) {
//         super(name, price, color);
//         this.tire = tire;
//     }
//     showInfo() : string {
//         let myInfo : string = '';
//         for (let i = 0; i < this.color.length; i++) {
//             myInfo += this.color[i];
//             myInfo += ', '
//         }
//         return `Car name: ${this.name}
//                 Price: ${this.price}
//                 color: ${myInfo}
//                 tire: ${this.tire}`
//     }
// }
// let suzuki = new Moto('Suzuki', 3000, ['green', 'rose'], 2);
// console.log(suzuki.showInfo());
// Create a class
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
        var myCar = "Car name: " + this.name + "\n                Price: " + this.price + "\n                color: " + myInfo;
        console.log(myCar);
    };
    return Cars;
}());
var honda = new Cars('Honda', 30000, ['green', 'red', 'black', 'white']);
honda.showInfo();
// Shorten the code in function by using super.function
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(name, price, color, tire) {
        var _this = _super.call(this, name, price, color) || this;
        _this.tire = tire;
        return _this;
    }
    Moto.prototype.showInfo = function () {
        _super.prototype.showInfo.call(this);
        console.log("With " + this.tire + " tires");
    };
    return Moto;
}(Cars));
var suzuki = new Moto('Suzuki', 3000, ['green', 'rose'], 2);
var yamaha = new Moto('Yamaha', 4000, ['black', 'red'], 2);
suzuki.showInfo();
yamaha.showInfo();
