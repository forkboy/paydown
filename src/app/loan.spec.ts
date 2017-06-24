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
    let loan = new Loan(4.17, 360);
    expect(loan.rate).toBe(4.17);
    expect(loan.term).toBe(360);
  }));

  it('interest should be calculated daily', async(() => {
    let loan = new Loan(4.19, 360);
    var interest = loan.InterestForPeriod(250000, new Date(2017, 5, 5), new Date(2017, 6, 5))
    expect(interest).toBe(889.66);
  }));
});