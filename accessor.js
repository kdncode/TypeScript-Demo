var Hero = /** @class */ (function () {
    function Hero(_name) {
        this._name = _name;
    }
    Object.defineProperty(Hero.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Hero;
}());
var zeus = new Hero('Zeus');
console.log(zeus.name);
