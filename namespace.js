// Use export to use the class names
var People;
(function (People) {
    var String = /** @class */ (function () {
        function String() {
        }
        return String;
    }());
    People.String = String;
    var Number = /** @class */ (function () {
        function Number() {
        }
        return Number;
    }());
    People.Number = Number;
})(People || (People = {}));
var abc = new People.String();
var xyz = new People.Number();
