import { Decimal } from "Decimal.js";
export const enum LineDriect {
    UP = "up",
    DOWN = "down"
}

export class Fib {
    begin
    end
    heigh
    /**从最高到最低计算的fib数值 */
    f191
    f382
    f5
    f618
    f809
    low
    drirect
    region
    fibArr
    /**进场点位 */
    approachPrice
    /**第一条止盈点位 */
    stopProfit1Price
    stopProfit2Price
    stopProfit3Price
    stopProfit4Price
    stopProfit5Price
    /**止损点位 */
    stopLossPrice
    
    constructor(beginVal: string | number, endVal: string | number, public fix: number = 2) {
        this.begin = new Decimal(beginVal)
        this.end = new Decimal(endVal)
        let [heigh, f191, f382, f5, f618, f809, low] = this.fibArr = Fib.toFib([beginVal, endVal])
        let drirect = Fib.computeDriect(this.begin, this.end);
        let region = Fib.computeRegion(heigh, low);
        this.heigh = heigh
        this.f191 = f191
        this.f382 = f382
        this.f5 = f5
        this.f618 = f618
        this.f809 = f809
        this.low = low
        this.drirect = drirect
        this.region = region
        this.approachPrice = this.drirect == LineDriect.DOWN ? this.f809 : this.f191
        this.stopProfit1Price = this.drirect == LineDriect.DOWN ? this.f618 : this.f382
        this.stopProfit2Price = this.f5
        this.stopProfit3Price = this.drirect == LineDriect.DOWN ? this.f382 : this.f618
        this.stopProfit4Price = this.drirect == LineDriect.DOWN ? this.f191 : this.f809
        this.stopProfit5Price = this.drirect == LineDriect.DOWN ? this.heigh : this.low
        this.stopLossPrice = this.drirect == LineDriect.DOWN ? this.low : this.heigh
    }

    static toFib(arr: (string | number)[]) {
        let heigh = new Decimal(Math.max.apply(Math.max, arr));
        let low = new Decimal(Math.min.apply(Math.min, arr));
        let region = Fib.computeRegion(heigh, low);
        let f191 = heigh.minus(region.mul(0.191))
        let f382 = heigh.minus(region.mul(0.382))
        let f5 = heigh.minus(region.mul(0.5))
        let f618 = heigh.minus(region.mul(0.618))
        let f809 = heigh.minus(region.mul(0.809))
        return [heigh, f191, f382, f5, f618, f809, low]
    }

    private static computeRegion(heigh: Decimal, low: Decimal) {
        return heigh.minus(low);
    }

    private static computeDriect(heigh: Decimal, low: Decimal) {
        let drirect = LineDriect.UP
        if (heigh.lt(low)) {
            [heigh, low] = [low, heigh]
            drirect = LineDriect.DOWN
        }
        return drirect;
    }

    static fixedNas(itVal, dr) {
        let fix = 2;
        let step = 25;
        let arr = new Decimal(itVal).toString().split(".")
        let itemRound = new Decimal(arr[0]);
        let per = new Decimal((arr[1] || "0").substr(0, fix))
        if (per.mod(step).eq(0)) {
            return itemRound.plus("0." + per.toString());
        } else {
            let item = 1
            if (dr == Decimal.ROUND_DOWN) {
                item = 0
            }
            let perItem = per.divToInt(step).plus(item).mul(0.25);
            return itemRound.plus(perItem)
        }
    }
}
