import { Fib } from "./Fib"
import Decimal from "Decimal.js"
import * as $ from "jquery"

$(function(){ 
    const it = new Fib(7832.5, 7911.75)
    // console.log(Fib.toFib(["11", "80", "222"]))  
    let approachPrice = Fib.fixedNas(it.approachPrice, Decimal.ROUND_UP)
    let stopProfit1Price = Fib.fixedNas(it.stopProfit1Price, Decimal.ROUND_DOWN)
    let stopProfit2Price = Fib.fixedNas(it.stopProfit2Price, Decimal.ROUND_DOWN)
    let stopProfit3Price = Fib.fixedNas(it.stopProfit3Price, Decimal.ROUND_DOWN)
    let stopProfit4Price = Fib.fixedNas(it.stopProfit4Price, Decimal.ROUND_DOWN)
    let stopProfit5Price = Fib.fixedNas(it.stopProfit5Price, Decimal.ROUND_DOWN)
    $("body").prepend("<br/>\n")
    $("body").prepend("<br/>进场点位:" + approachPrice)
    $("body").prepend("<br/>第一止盈点位:" + stopProfit1Price)
    $("body").prepend("<br/>第二止盈点位:" + stopProfit2Price)
    $("body").prepend("<br/>第三止盈点位:" + stopProfit3Price)
    $("body").prepend("<br/>第四止盈点位:" + stopProfit4Price)
    $("body").prepend("<br/>第五止盈点位:" + stopProfit5Price)
    $("body").prepend("<br/>---------------------finished----------------------------")


})