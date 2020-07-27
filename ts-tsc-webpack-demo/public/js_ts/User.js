"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.showName = function () {
        console.log(this.name);
    };
    User.prototype.showAge = function () {
        console.log(this.age);
    };
    return User;
}());
exports.User = User;
