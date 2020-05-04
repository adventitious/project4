import { Component, OnInit, Input  } from '@angular/core';
import { IIngredient } from '../interfaces/ingredient';

import { SandwichApiService } from '../services/sandwich-api.service';
import {SharedserviceService} from '../services/sharedservice.service';

@Component({
  selector: 'app-ingredient2',
  templateUrl: './ingredient2.component.html',
  styleUrls: ['./ingredient2.component.css'],
  providers: [SandwichApiService]
})
export class Ingredient2Component implements OnInit {

  @Input() ingredient2Data: IIngredient;

  currency: string;
  currency2: number;

  constructor( private _sandwichApiService: SandwichApiService,
               private sharedService: SharedserviceService  ) {
    console.log( "new ingredient2 : " );
    
    this.sharedService.sharedCurrency.subscribe( zz => this.currency = zz  )
    this.sharedService.sharedCurrency2.subscribe( ww => this.currency2 = ww  )
    
  }

  ngOnInit(): void {
  }
  
  getNewPrice( price: string ): string
  {
    return (Math.round( (+price * this.currency2) * 100 ) / 100 ).toString();
    //return (+price * this.currency2).toString();
  }

  deleteIngredient2( ingredient2Id: string, price: string ): void {

    // let priceNumber: number = +price;
    console.log( "delete ingredient2 :  " + (+price + 25 )  );


    let priceTotal: string;
    let priceTotalNew: number;

    this.sharedService.sharedPriceTotal.subscribe( sharedPriceTotal => priceTotal = sharedPriceTotal  )

    priceTotalNew = +priceTotal - +price;

    console.log( "delete ingredient2 2: " +  priceTotalNew );

    this.sharedService.setPriceTotal( priceTotalNew.toString() )

    this._sandwichApiService.delIngredient2Data( ingredient2Id );
  }
}
