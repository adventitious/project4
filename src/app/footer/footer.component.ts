import { Component, OnInit } from '@angular/core';
import {SharedserviceService} from '../services/sharedservice.service';
import { SandwichApiService } from '../services/sandwich-api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  priceTotal: string;
  currency: string;
  currency2: number;
  complete: boolean = true;
  imageWidth: number = 200;
  imageSource: string;
  imageSourceA: string = 'https://firebasestorage.googleapis.com/v0/b/sandwich-b148e.appspot.com/o/pngwave1.png?alt=media&token=d135fb81-a94f-4e87-93e4-0f2fa7004829';
  imageSourceB: string = 'https://firebasestorage.googleapis.com/v0/b/sandwich-b148e.appspot.com/o/pngwave.png?alt=media&token=3996036d-41d8-4b4c-bf8e-3807d0eccfc0';

  constructor(  private sharedService: SharedserviceService, private _sandwichApiService: SandwichApiService ) {
    if( Math.floor(Math.random() * Math.floor(2)) < 1  )
    {
      this.imageSource = this.imageSourceA;
    }
    else
    {
      this.imageSource = this.imageSourceB;
    }

    this.sharedService.sharedPriceTotal.subscribe( priceTotal => this.priceTotal = priceTotal )
    this.sharedService.sharedCurrency.subscribe( sharedCurrency => this.currency = sharedCurrency  )
    this.sharedService.sharedCurrency2.subscribe( sharedCurrency2 => this.currency2 = sharedCurrency2  )

    console.log( "new Footer : 2: " + this.priceTotal );
  }


  getNewPrice( ): string
  {
    if( (+this.priceTotal * this.currency2 ) < 0.0001 )
    {
      return "";
    }
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
  
  orderNow()
  {
    this.complete = !this.complete;
  }

}
