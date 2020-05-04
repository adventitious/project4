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
        console.log('quotes: ' + this.currencyData.quotes);
        
        let usdeur: number  = this.currencyData.quotes['USDEUR'];
        let usdchf: number  = this.currencyData.quotes['USDCHF'];
        let usdjpy: number  = this.currencyData.quotes['USDJPY'];

        
        console.log('usdeur: ' + usdeur );
        console.log('usdchf: ' + usdchf );
        console.log('usdjpy: ' + usdjpy );

        let eurchf: number = usdchf / usdeur;
        let eurjpy: number = usdjpy / usdeur;

        console.log('eurchf: ' + eurchf );
        console.log('eurjpy: ' + eurjpy );

        this.sharedService.setEurjpy( eurjpy );
        this.sharedService.setEurchf( eurchf );

      },
      error => this.errorMessage = <any>error
    );

  }
}
