import { TestBed, async } from '@angular/core/testing';

import { Loan } from './loan';

describe('Loan', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

  it('should construct', async(() => {
    let loan = new Loan(250000, 4.17, 360, 50, new Date(2017, 5, 5));
    expect(loan.extraRepayments).toBe(50);
    expect(loan.amount).toBe(250000);
    expect(loan.rate).toBe(4.17);
    expect(loan.term).toBe(360);
    expect(loan.startDate).toBe(new Date(2017, 5, 5));
  }));

  it('given a regular extra payment, term should be reduced', async(() => {
    let loan = new Loan(250000, 4.19, 360, 5000, new Date(2017, 5, 5));
    expect(loan.EffectiveTerm()).toBe((4 + 7/12));
  }));

  it('interest should be calculated daily', async(() => {
    let loan = new Loan(250000, 4.19, 360, 0, new Date(2017, 5, 5));
    var interest = loan.InterestForPeriod(250000, new Date(2017, 5, 5), new Date(2017, 6, 5))
    expect(interest).toBe(889.66);
  }));
});