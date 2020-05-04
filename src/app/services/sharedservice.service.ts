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

  
  private eurchf = new BehaviorSubject(1.2);
  sharedEurchf = this.eurchf.asObservable();

  private eurjpy = new BehaviorSubject(100);
  sharedEurjpy = this.eurjpy.asObservable();

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
  
  setToEuro()
  {
    this.setCurrency( '€' );
    this.setCurrency2( 1 );
  }
  
  setToChf()
  {
    this.setCurrency( 'chf' );

    let x : number;

    this.sharedEurchf.subscribe( sharedEurchf => x = sharedEurchf  )

    this.setCurrency2( x );
  }
  
  setToJpy()
  {
    this.setCurrency( 'JP¥' );

    let x : number;

    this.sharedEurjpy.subscribe( sharedEurjpy => x = sharedEurjpy  )

    this.setCurrency2( x );
  }
  
  setEurjpy( message: number )
  {
    this.eurjpy.next(message);
  }

  setEurchf( message: number )
  {
    this.eurchf.next(message);
  }

}

