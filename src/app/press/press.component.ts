import { Component, OnInit } from '@angular/core';
import { IIngredient, Ingredient } from '../interfaces/ingredient';
import {PressApiService} from '../services/press-api.service';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css'],
  providers: [PressApiService]
})

export class PressComponent implements OnInit {
  ingredientsData: IIngredient[];

  constructor(  private _pressApiService: PressApiService   ) { 
    console.log( "new press");
    
    
  }

  ngOnInit(): void {
    console.log( "press: ngOnInit");

    this._pressApiService.getIngredientData().subscribe( ingredientsData => 
      { this.ingredientsData = ingredientsData });

    console.log( "press: ngOnInit 2");
  }


  

}
