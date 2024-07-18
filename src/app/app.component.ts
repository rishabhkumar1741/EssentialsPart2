import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {type InputDate, OutputDate} from "./appModel";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  title = 'Essentials_part_2';

  //variable
  outputDates= signal<OutputDate[]|undefined>(undefined)

  calculateInvestmentResults(data:InputDate ) {
    const {initialInvestment, annualInvestment, duration, expectedReturn} = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.outputDates.set(annualData)

  }
}
