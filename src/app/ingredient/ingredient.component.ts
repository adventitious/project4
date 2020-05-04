import { Component, OnInit, Input } from '@angular/core';
import { IIngredient, Ingredient  } from '../interfaces/ingredient';

import {PressApiService} from '../services/press-api.service'
import {SandwichApiService} from '../services/sandwich-api.service'

import {SharedserviceService} from '../services/sharedservice.service'

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
  providers: [PressApiService]
})
export class IngredientComponent implements OnInit {

  @Input() ingredientData: IIngredient;
  sandwichId:string;
  currency: string;
  currency2: number;

  constructor( private _pressApiService: PressApiService,
               private _sandwichApiService: SandwichApiService,
               private sharedService: SharedserviceService ) {
    console.log( "new ingredient : 1" );
    
    this.sharedService.sharedCurrency.subscribe( sharedCurrency => this.currency = sharedCurrency  )
    this.sharedService.sharedCurrency2.subscribe( sharedCurrency2 => this.currency2 = sharedCurrency2  )

  }

  ngOnInit(): void {
  }

  getNewPrice( price: string ): string
  {
    return (Math.round( (+price * this.currency2) * 100) / 100 ).toString();
  }
  
  addTheIngredient( title: string, description: string, price: string, imageURL: string  ): boolean {

    console.log( "new ingredient : add ingredient 1" );
    let tempIngredient: IIngredient;
    let priceTotal: string;
    let priceTotalNew: number;

    this.sharedService.sharedSandwichId.subscribe(sandwichId => this.sandwichId = sandwichId)
    this.sharedService.sharedPriceTotal.subscribe( sharedPriceTotal => priceTotal = sharedPriceTotal  )

    console.log( "new ingredient : add ingredient 2: " + this.sandwichId + "  " + price + "  " + priceTotal );
    

    priceTotalNew = +priceTotal + +price;
    

    console.log( "new ingredient : add ingredient 30: " +  priceTotal );
    console.log( "new ingredient : add ingredient 40: " +  priceTotalNew );
    console.log( "new ingredient : add ingredient 50: " +  price );

    this.sharedService.setPriceTotal( priceTotalNew.toString() )

    tempIngredient = new Ingredient( title, description, price, imageURL   );
    tempIngredient.sandwichId = this.sandwichId;
    this._sandwichApiService.addIngredientData( tempIngredient );
    return false;
  }
  
}
