(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/Fib.ts":
/*!********************!*\
  !*** ./src/Fib.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Fib = void 0;
var Decimal_js_1 = __webpack_require__(/*! Decimal.js */ "./node_modules/Decimal.js/decimal.js");
var Fib = /** @class */ (function () {
    function Fib(beginVal, endVal, fix) {
        if (fix === void 0) { fix = 2; }
        this.fix = fix;
        this.begin = new Decimal_js_1.Decimal(beginVal);
        this.end = new Decimal_js_1.Decimal(endVal);
        var _a = this.fibArr = Fib.toFib([beginVal, endVal]), heigh = _a[0], f191 = _a[1], f382 = _a[2], f5 = _a[3], f618 = _a[4], f809 = _a[5], low = _a[6];
        var drirect = Fib.computeDriect(this.begin, this.end);
        var region = Fib.computeRegion(heigh, low);
        this.heigh = heigh;
        this.f191 = f191;
        this.f382 = f382;
        this.f5 = f5;
        this.f618 = f618;
        this.f809 = f809;
        this.low = low;
        this.drirect = drirect;
        this.region = region;
        this.approachPrice = this.drirect == "down" /* DOWN */ ? this.f809 : this.f191;
        this.stopProfit1Price = this.drirect == "down" /* DOWN */ ? this.f618 : this.f382;
        this.stopProfit2Price = this.f5;
        this.stopProfit3Price = this.drirect == "down" /* DOWN */ ? this.f382 : this.f618;
        this.stopProfit4Price = this.drirect == "down" /* DOWN */ ? this.f191 : this.f809;
        this.stopProfit5Price = this.drirect == "down" /* DOWN */ ? this.heigh : this.low;
        this.stopLossPrice = this.drirect == "down" /* DOWN */ ? this.low : this.heigh;
    }
    Fib.toFib = function (arr) {
        var heigh = new Decimal_js_1.Decimal(Math.max.apply(Math.max, arr));
        var low = new Decimal_js_1.Decimal(Math.min.apply(Math.min, arr));
        var region = Fib.computeRegion(heigh, low);
        var f191 = heigh.minus(region.mul(0.191));
        var f382 = heigh.minus(region.mul(0.382));
        var f5 = heigh.minus(region.mul(0.5));
        var f618 = heigh.minus(region.mul(0.618));
        var f809 = heigh.minus(region.mul(0.809));
        return [heigh, f191, f382, f5, f618, f809, low];
    };
    Fib.computeRegion = function (heigh, low) {
        return heigh.minus(low);
    };
    Fib.computeDriect = function (heigh, low) {
        var _a;
        var drirect = "up" /* UP */;
        if (heigh.lt(low)) {
            _a = [low, heigh], heigh = _a[0], low = _a[1];
            drirect = "down" /* DOWN */;
        }
        return drirect;
    };
    Fib.fixedNas = function (itVal, dr) {
        var fix = 2;
        var step = 25;
        var arr = new Decimal_js_1.Decimal(itVal).toString().split(".");
        var itemRound = new Decimal_js_1.Decimal(arr[0]);
        var per = new Decimal_js_1.Decimal((arr[1] || "0").substr(0, fix));
        if (per.mod(step).eq(0)) {
            return itemRound.plus("0." + per.toString());
        }
        else {
            var item = 1;
            if (dr == Decimal_js_1.Decimal.ROUND_DOWN) {
                item = 0;
            }
            var perItem = per.divToInt(step).plus(item).mul(0.25);
            return itemRound.plus(perItem);
        }
    };
    return Fib;
}());
exports.Fib = Fib;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Fib_1 = __webpack_require__(/*! ./Fib */ "./src/Fib.ts");
var Decimal_js_1 = __webpack_require__(/*! Decimal.js */ "./node_modules/Decimal.js/decimal.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(function () {
    var it = new Fib_1.Fib(7832.5, 7911.75);
    // console.log(Fib.toFib(["11", "80", "222"]))  
    var approachPrice = Fib_1.Fib.fixedNas(it.approachPrice, Decimal_js_1.default.ROUND_UP);
    var stopProfit1Price = Fib_1.Fib.fixedNas(it.stopProfit1Price, Decimal_js_1.default.ROUND_DOWN);
    var stopProfit2Price = Fib_1.Fib.fixedNas(it.stopProfit2Price, Decimal_js_1.default.ROUND_DOWN);
    var stopProfit3Price = Fib_1.Fib.fixedNas(it.stopProfit3Price, Decimal_js_1.default.ROUND_DOWN);
    var stopProfit4Price = Fib_1.Fib.fixedNas(it.stopProfit4Price, Decimal_js_1.default.ROUND_DOWN);
    var stopProfit5Price = Fib_1.Fib.fixedNas(it.stopProfit5Price, Decimal_js_1.default.ROUND_DOWN);
    $("body").prepend("<br/>\n");
    $("body").prepend("<br/>进场点位:" + approachPrice);
    $("body").prepend("<br/>第一止盈点位:" + stopProfit1Price);
    $("body").prepend("<br/>第二止盈点位:" + stopProfit2Price);
    $("body").prepend("<br/>第三止盈点位:" + stopProfit3Price);
    $("body").prepend("<br/>第四止盈点位:" + stopProfit4Price);
    $("body").prepend("<br/>第五止盈点位:" + stopProfit5Price);
    $("body").prepend("<br/>---------------------finished----------------------------");
});


/***/ }),

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Fib_1 = __webpack_require__(/*! ./Fib */ "./src/Fib.ts");
var Decimal_js_1 = __webpack_require__(/*! Decimal.js */ "./node_modules/Decimal.js/decimal.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
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


/***/ })

}]);
//# sourceMappingURL=common.chunk.js.map