import { Injectable } from '@angular/core';

import{ HttpClient, HttpErrorResponse } from '@angular/common/http';
import{ Observable } from 'rxjs';
import{ catchError, tap } from 'rxjs/operators';

import{ AngularFirestoreCollection, AngularFirestore   } from '@angular/fire/firestore';

import{ IIngredient } from '../interfaces/ingredient'


@Injectable({
  providedIn: 'root'
})
export class PressApiService {

  // properties
  ingredientsDataCollection: AngularFirestoreCollection<IIngredient>;

  ingredientsData: Observable<IIngredient[]>;

  allIngredientsData: IIngredient[];

  errorMessage: string;

  constructor( private _http: HttpClient, private _afs: AngularFirestore ) {
    // https://stackoverflow.com/questions/50376352/filter-data-from-firestore-whit-angularfire
    // this.afs.collection('avisos', ref => ref.where('categoria','==', categoriaToFilter )).valueChanges()

    //this.ingredientsDataCollection =_afs.collection<IIngredient>("sandwich_data" , );
    
    this.ingredientsDataCollection =_afs.collection<IIngredient>("press_data" , );
  }


  getIngredientData(): Observable<IIngredient[]>{
    this.ingredientsData = this.ingredientsDataCollection.valueChanges(  { idField:'id'}  );
    this.ingredientsData.subscribe( data => console.log( "getIngredientsData: " + JSON.stringify(data) ) );
    return this.ingredientsData;
  }

  private handleError( err:HttpErrorResponse ) {
    console.log( 'PressApiService: ' + err.message )
    return Observable.throw(err.message);
  }
}
