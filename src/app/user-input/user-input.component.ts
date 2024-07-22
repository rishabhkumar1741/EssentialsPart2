import {Component,  signal} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {InverstmentService} from "../inverstment.service";

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
  //constructer- calling
  inverstemntservice: InverstmentService;
  constructor(inverstemntservice:InverstmentService) {
    this.inverstemntservice = inverstemntservice;
  }

  //variables
  enteredInitialInvestment= signal('0');
  enteredDuration =signal('0');
  enteredExpectedReturn = signal('0');
  enteredAnnualInvestment = signal('0');

//Event



  //methods
  onSubmit(){
    this.inverstemntservice.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    })

    this.enteredInitialInvestment.set('0')
  }



}
