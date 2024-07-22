import {Component} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {InverstmentService} from "../inverstment.service";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {


  //constructer
  constructor(inverstmentservice : InverstmentService,) {
    this.inverstmentservice = inverstmentservice;
  }

  //VARIABLE
  inverstmentservice:InverstmentService;
  get results()
  {
    return this.inverstmentservice.resultData
  }


}
