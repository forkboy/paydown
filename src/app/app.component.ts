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
    this.loan = new Loan(250000, 4.19, 360, 0, new Date(2017,5,5));

  }
}
