import { Finance } from 'financejs';
import { datejs } from 'datejs';

export class Loan {
    amount: number;
    rate: number;
    term: number;
    extraRepayments: number;
    finance: Finance;
    startDate: Date;

    constructor (amount: number, rate: number, totalTermMonths: number, extraRepayments: number, startedAt: Date)
    {
        this.finance = new Finance();
        this.amount = amount;
        this.rate = rate;
        this.term = totalTermMonths;
        this.extraRepayments = extraRepayments;
        this.startDate = startedAt;
    }

    roundTo(value: number, places: number) : number
    {
        let power = Math.pow(10,places);
        return Math.round(value * power) / power
    }

    daysBetween(from: Date, to:Date) : number
    {
        return (to.valueOf() - from.valueOf()) / (1000 * 3600 * 24) + 1;
    }

    InterestForPeriod(pv: number, from:Date, to:Date) : number
    {
        let days = this.daysBetween(from, to);
        let totalInterest = ((this.rate / 100 / 365.0) * pv) * days;
        return this.roundTo(totalInterest, 2);
    }

    EffectiveTerm() : number
    {
        let et = 0
        let balanceAtStart = this.amount;
        let balanceAtEnd = this.amount;
        let startDate = this.startDate;
        let endDate = new Date(startDate.getFullYear(), this.startDate.getMonth() + 1, this.startDate.getDay());
        while (balanceAtEnd > 0)
        {
            balanceAtStart = balanceAtEnd;
            let interest = this.InterestForPeriod(balanceAtStart, startDate, endDate);
            let principal_paid = this.extraRepayments - interest;
            balanceAtEnd = balanceAtStart - principal_paid;

            if (balanceAtEnd > balanceAtStart)
                return -1;
            console.log(balanceAtEnd);
            et++;
        }
        
        return et;
    }
}
