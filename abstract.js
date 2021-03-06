// To use abstract -> must create a subclass to use superclass
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
// abstract class OS {
//     name: string;
//     public sendMessage() {
//         console.log('Send message');
//     }
//     public call() {
//         console.log('Call');
//     }
// }
// class Android extends OS {
// }
// let iOS = new Android();
// iOS.sendMessage();
// iOS.call();
// Use abstract for function
var OS = /** @class */ (function () {
    function OS() {
    }
    return OS;
}());
var Android = /** @class */ (function (_super) {
    __extends(Android, _super);
    function Android() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Android.prototype.sendMessage = function () {
        console.log('Send messages from Android OS');
    };
    Android.prototype.call = function () {
        return 'Call from Android';
    };
    return Android;
}(OS));
var iOS = new Android();
iOS.sendMessage();
console.log(iOS.call());
