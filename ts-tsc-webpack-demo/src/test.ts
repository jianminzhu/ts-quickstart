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
    console.log("<br/>\n")
    console.log("<br/>进场点位:" + approachPrice)
    console.log("<br/>第一止盈点位:" + stopProfit1Price)
    console.log("<br/>第二止盈点位:" + stopProfit2Price)
    console.log("<br/>第三止盈点位:" + stopProfit3Price)
    console.log("<br/>第四止盈点位:" + stopProfit4Price)
    console.log("<br/>第五止盈点位:" + stopProfit5Price)
    console.log("<br/>---------------------finished----------------------------")


})