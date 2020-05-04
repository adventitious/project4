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

  constructor( private sharedService: SharedserviceService ) { }

  ngOnInit(): void {
  }

  selectEuro( ): void 
  {
    this.euro  = !false;
    this.franc =  false;
    this.yen   =  false;

    this.sharedService.setToEuro( );
  }
  
  selectFranc( ): void 
  {
    this.euro  =  false;
    this.franc = !false;
    this.yen   =  false;

    this.sharedService.setToChf( );
  }

  selectYen( ): void 
  {
    this.euro  =  false;
    this.franc =  false;
    this.yen   = !false;

    this.sharedService.setToJpy( );
  }

}
