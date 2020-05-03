import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { PressComponent } from './press/press.component';
import { SandwichComponent } from './sandwich/sandwich.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    PressComponent,
    SandwichComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
