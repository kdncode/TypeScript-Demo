var OS = /** @class */ (function () {
    function OS() {
    }
    OS.prototype.sendMessage = function () {
        console.log('Send message');
    };
    OS.prototype.call = function () {
        console.log('Call');
    };
    return OS;
}());
var iOS = new OS();
iOS.sendMessage();
