import { Component } from '@angular/core';
import { Loan } from './loan';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loan:Loan;
  effectiveTerm: number;
  effectiveTermString: string;
  

  constructor()
  {
    let startDate = new Date(2017,5,5);

    this.loan = new Loan(250000, 4.19, 360, 5000, startDate);
    this.effectiveTerm = this.loan.EffectiveTerm();
    this.effectiveTermString = ((this.effectiveTerm - this.effectiveTerm % 12) / 12) + " years, " + (this.effectiveTerm % 12) + " months";
  }
}
