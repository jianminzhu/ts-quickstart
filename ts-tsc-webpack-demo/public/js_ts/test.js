"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fib_1 = require("./Fib");
var Decimal_js_1 = require("Decimal.js");
var $ = require("jquery");
$(function () {
    var it = new Fib_1.Fib(7832.5, 7911.75);
    // console.log(Fib.toFib(["11", "80", "222"]))  
    var approachPrice = Fib_1.Fib.fixedNas(it.approachPrice, Decimal_js_1.default.ROUND_UP);
    var stopProfit1Price = Fib_1.Fib.fixedNas(it.stopProfit1Price, Decimal_js_1.default.ROUND_DOWN);
    var stopProfit2Price = Fib_1.Fib.fixedNas(it.stopProfit2Price, Decimal_js_1.default.ROUND_DOWN);
    var stopProfit3Price = Fib_1.Fib.fixedNas(it.stopProfit3Price, Decimal_js_1.default.ROUND_DOWN);
    var stopProfit4Price = Fib_1.Fib.fixedNas(it.stopProfit4Price, Decimal_js_1.default.ROUND_DOWN);
    var stopProfit5Price = Fib_1.Fib.fixedNas(it.stopProfit5Price, Decimal_js_1.default.ROUND_DOWN);
    console.log("<br/>\n");
    console.log("<br/>进场点位:" + approachPrice);
    console.log("<br/>第一止盈点位:" + stopProfit1Price);
    console.log("<br/>第二止盈点位:" + stopProfit2Price);
    console.log("<br/>第三止盈点位:" + stopProfit3Price);
    console.log("<br/>第四止盈点位:" + stopProfit4Price);
    console.log("<br/>第五止盈点位:" + stopProfit5Price);
    console.log("<br/>---------------------finished----------------------------");
});
