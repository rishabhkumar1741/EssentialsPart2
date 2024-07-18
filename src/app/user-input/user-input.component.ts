import { Component, EventEmitter, Output } from '@angular/core';
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
  enteredInitialInvestment ='200';
  enteredDuration ='0';
  enteredExpectedReturn ='0';
  enteredAnnualInvestment='0';

//Event

  // @ts-ignore
  @Output() calculate = new EventEmitter<InputDate>();

  //methods
  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    });
  }



}
