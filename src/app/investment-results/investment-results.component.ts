import {Component, Input} from '@angular/core';
import {OutputDate} from "../appModel";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  //Input
  @Input() outputDates?:OutputDate[]
}
