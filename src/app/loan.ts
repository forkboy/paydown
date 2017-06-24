export class Loan {
    rate: number;
    term: number;
    
    constructor (rate: number, totalTermMonths: number)
    {
        this.rate = rate;
        this.term = totalTermMonths;

    }

    roundTo(value: number, places: number) : number
    {
        let power = Math.pow(10,places);
        return Math.round(value * power) / power
    }

    InterestForPeriod(pv: number, from:Date, to:Date) : number
    {
        let days = (to.valueOf() - from.valueOf()) / (1000 * 3600 * 24) + 1;
        let totalInterest = ((this.rate / 100 / 365.0) * pv) * days;
        return this.roundTo(totalInterest, 2);
    }

}
