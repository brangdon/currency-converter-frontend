import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';

@Injectable()
export class CurrencyService {

  constructor(private http:Http) {}

  convertSubmit(currencyFrom, currencyTo, amount){
    
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
    
          let request = {
              "currencyFrom": currencyFrom,
              "currencyTo" : currencyTo,
              "amount": amount
          }
    
          return this.http.post('http://localhost:8080/convert', JSON.stringify(request), options).map(res => res.json());

          
  }

}
