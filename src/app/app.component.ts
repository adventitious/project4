import { Component } from '@angular/core';
import {SharedserviceService} from './services/sharedservice.service'


import { CurrencyApiService } from './services/currency-api.service';
import { CurrencyResponse } from './interfaces/currency-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project S';
  
  currencyData:CurrencyResponse;
  errorMessage:any;
  
  constructor(  private sharedService: SharedserviceService, private _currencyService:CurrencyApiService  ) {

    console.log( "\nnew app\n");
    console.log(  Date.now() );

    this.sharedService.setSandwichId( Date.now().toString() )


    this._currencyService.getCurrencyData().subscribe(
      currencyData => {
        this.currencyData = currencyData;
        
        console.log('quotes: ' +  this.currencyData.result['EURCHF']['c'][0] );


        let eurchf: number = this.currencyData.result['EURCHF']['c'][0] 
        let eurjpy: number = this.currencyData.result['EURJPY']['c'][0] 

        this.sharedService.setEurjpy( eurjpy );
        this.sharedService.setEurchf( eurchf );

      },
      error => this.errorMessage = <any>error
    );

  }
}
