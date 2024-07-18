import {Component,  output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {InputDate} from "../appModel"

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //constructer

  //variables
  enteredInitialInvestment= signal('0');
  enteredDuration =signal('0');
  enteredExpectedReturn = signal('0');
  enteredAnnualInvestment = signal('0');

//Event

  // @ts-ignore
 calculate = output<InputDate>();

  //methods
  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    this.enteredInitialInvestment.set('0')
  }



}
