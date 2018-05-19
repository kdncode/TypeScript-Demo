var Hero = /** @class */ (function () {
    function Hero(_name) {
        this._name = _name;
    }
    Object.defineProperty(Hero.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    return Hero;
}());
// Getter
var zeus = new Hero('Zeus');
console.log(zeus.name);
// Setter
zeus.name = "I am a new Zeus";
console.log(zeus.name);
