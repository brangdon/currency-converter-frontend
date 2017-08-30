import { Component, OnInit } from '@angular/core';
import {CurrencyService} from '../currency.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css']
})
export class CurrencyFormComponent implements OnInit {

  currencies = [
    {id: 1, name: "Poland PLN", symbol: "PLN"},
    {id: 2, name: "United States USD", symbol: "USD"},
    {id: 3, name: "Euro EUR", symbol: "EUR"},
    {id: 4, name: "Great Britain GBP", symbol: "GBP"}
  ];
  selectedCurrencyFrom = null;
  selectedCurrencyTo = null;
  amountFromValue = 0;
  amountToValue = 0;
  currencyResult = null;
  rate = null;

  constructor(private _currencyService: CurrencyService) {
    this.selectedCurrencyFrom = this.currencies[0];
    this.selectedCurrencyTo = this.currencies[1];
   }

  ngOnInit() {
  }

  convertAction(){


    if(this.selectedCurrencyFrom.id != this.selectedCurrencyTo.id){

      this._currencyService.convertSubmit(this.selectedCurrencyFrom.symbol, this.selectedCurrencyTo.symbol,  this.amountFromValue).subscribe(result =>{

        this.currencyResult = result.value;
        this.rate = result.rate;
        
      }),
      error => {
        return Observable.throw(error);
      }

    } else {
      this.currencyResult = this.amountFromValue;
      this.rate = 1;
    }
    
  }

}
