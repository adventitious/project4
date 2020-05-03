import { Component, OnInit } from '@angular/core';
import {SharedserviceService} from '../services/sharedservice.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  euro:  boolean= !false;
  franc: boolean=  false;
  yen:   boolean=  false;

  // currency: string = "€";

  constructor( private sharedService: SharedserviceService ) { }

  ngOnInit(): void {
  }

  selectEuro( ): void 
  {
    console.log(" eddfdfsf");
      
    this.euro  = !false;
    this.franc =  false;
    this.yen   =  false;

    this.sharedService.setCurrency( '€' );
    this.sharedService.setCurrency2( 1 );
  }
  
  selectFranc( ): void 
  {
    this.euro  =  false;
    this.franc = !false; // JP¥
    this.yen   =  false;

    this.sharedService.setCurrency( 'chf' );
    this.sharedService.setCurrency2( 0.6 );
  }

  selectYen( ): void 
  {
    this.euro  =  false;
    this.franc =  false;
    this.yen   = !false;

    this.sharedService.setCurrency( 'JP¥' );
    this.sharedService.setCurrency2( 13.5 );
  }

}
