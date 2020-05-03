import { Component, OnInit } from '@angular/core';
import { IIngredient, Ingredient } from '../interfaces/ingredient';
import { SandwichApiService } from '../services/sandwich-api.service'

@Component({
  selector: 'app-sandwich',
  templateUrl: './sandwich.component.html',
  styleUrls: ['./sandwich.component.css'],
  providers: [SandwichApiService]
})
export class SandwichComponent implements OnInit {
  ingredient2sData: IIngredient[];

  constructor(private _sandwichApiService: SandwichApiService ) {
    console.log( "new sandwich");
  }

  ngOnInit(): void {
    console.log( "sandwich: ngOnInit");
    this._sandwichApiService.getIngredientData().subscribe( ingredient2sData => 
      { this.ingredient2sData = ingredient2sData });
  }


}
