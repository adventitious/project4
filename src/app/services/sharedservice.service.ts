import { Injectable } from '@angular/core';
import{ Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// https://medium.com/@chameeradulanga87/sharing-data-between-angular-components-f76fa680bf76
export class SharedserviceService {


  private sandwichId =   new BehaviorSubject('0000');
  sharedSandwichId = this.sandwichId.asObservable();

  private priceTotal = new BehaviorSubject('0');
  sharedPriceTotal = this.priceTotal.asObservable();
  
  private currency = new BehaviorSubject('€');
  sharedCurrency = this.currency.asObservable();
  
  private currency2 = new BehaviorSubject(1);
  sharedCurrency2 = this.currency2.asObservable();

  constructor() { }


  setSandwichId( message: string) 
  {
    this.sandwichId.next(message)
    console.log( "new sandwichId : " + message );
  }

  setPriceTotal( message: string) 
  {
    this.priceTotal.next(message)
    console.log( "new priceTotal : " + message );
  }

  setCurrency( message: string) 
  {
    this.currency.next(message)
    console.log( "new currency : " + message );
  }
  
  setCurrency2( message: number) 
  {
    this.currency2.next(message)
    console.log( "new currency2 : " + message );
  }
  
  
}

