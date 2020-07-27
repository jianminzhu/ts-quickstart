"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var User_1 = require("./User");
var c = require("./config");
function main() {
    var user = new User_1.User(c.name, c.age);
    user.showAge();
    user.showName();
}
exports.main = main;
