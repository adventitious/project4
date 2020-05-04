import { Component, OnInit } from '@angular/core';
import {SharedserviceService} from '../services/sharedservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  priceTotal: string;
  currency: string;
  currency2: number;

  constructor(  private sharedService: SharedserviceService ) {

    
    // this.priceTotal = '0';
    //this.sharedService.setPriceTotal( "qwezxc" );

    this.sharedService.sharedPriceTotal.subscribe( priceTotal => this.priceTotal = priceTotal )
    this.sharedService.sharedCurrency.subscribe( zz => this.currency = zz  )
    this.sharedService.sharedCurrency2.subscribe( ww => this.currency2 = ww  )

    console.log( "new Footer : 2: " + this.priceTotal );
  }


  getNewPrice( ): string
  {
    return (Math.round( (+this.priceTotal * this.currency2) * 100) / 100 ).toString();
    // return (+this.priceTotal * this.currency2).toString();
  }

  getCurrency(): string
  {
    if( +this.priceTotal < 0.000001)
    {
      return "";
    }
    else
    {
      return this.currency;
    }
  }

  ngOnInit(): void {
  }

}
