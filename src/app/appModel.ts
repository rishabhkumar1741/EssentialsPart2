export interface InputDate {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
}

export interface OutputDate {
  annualInvestment:number;
  interest:number;
  totalAmountInvested:number;
  totalInterest:number;
  valueEndOfYear:number;
  year:number;

}
