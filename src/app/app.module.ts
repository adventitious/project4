import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { PressComponent } from './press/press.component';
import { SandwichComponent } from './sandwich/sandwich.component';
import { HeadingComponent } from './heading/heading.component';
import { FooterComponent } from './footer/footer.component';

import{ AngularFirestoreModule } from '@angular/fire/firestore';
import{ AngularFireModule } from '@angular/fire';
import{ environment } from '../environments/environment'

import { HttpClientModule } from '@angular/common/http';
import { Ingredient2Component } from './ingredient2/ingredient2.component';
import{ SharedserviceService } from './services/sharedservice.service';

@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    PressComponent,
    SandwichComponent,
    HeadingComponent,
    FooterComponent,
    Ingredient2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase ),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
