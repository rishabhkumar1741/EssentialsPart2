import {Injectable,signal} from "@angular/core";
import {InputDate, OutputDate} from "./appModel";

@Injectable({providedIn: 'root'})
export class InverstmentService{
  resultData = signal<OutputDate[]|undefined>(undefined);

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
    this.resultData.set(annualData)

  }
}
