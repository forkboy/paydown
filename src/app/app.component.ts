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

  loan1:number = 250000;
  loan2:number = 250000;

  constructor()
  {
    this.loan = new Loan(4.19, 360);

  }
}
