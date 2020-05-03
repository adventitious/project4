import { Component } from '@angular/core';
import {SharedserviceService} from './services/sharedservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project S';
  
  constructor(  private sharedService: SharedserviceService  ) {

    console.log( "\nnew app\n");
    console.log(  Date.now() );

    
    
    this.sharedService.setSandwichId( Date.now().toString() )

  }
}
