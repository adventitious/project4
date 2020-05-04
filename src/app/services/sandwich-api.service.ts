import { Injectable } from '@angular/core';

import{ HttpClient, HttpErrorResponse } from '@angular/common/http';
import{ Observable } from 'rxjs';
import{ catchError, tap } from 'rxjs/operators';

import{ AngularFirestoreCollection, AngularFirestore   } from '@angular/fire/firestore';

import{ IIngredient } from '../interfaces/ingredient'
import {SharedserviceService} from '../services/sharedservice.service';


@Injectable({
  providedIn: 'root'
})
export class SandwichApiService {

  // properties
  ingredient2sDataCollection: AngularFirestoreCollection<IIngredient>;

  ingredient2sData: Observable<IIngredient[]>;

  allIngredient2sData: IIngredient[];

  errorMessage: string;

  constructor( private _http: HttpClient, private _afs: AngularFirestore,
               private sharedService: SharedserviceService  ) {

    // https://stackoverflow.com/questions/50376352/filter-data-from-firestore-whit-angularfire
    // this.afs.collection('avisos', ref => ref.where('categoria','==', categoriaToFilter )).valueChanges()
    // , ref => ref.where('categoria','==', categoriaToFilter )
    
    let sandwichId : string;

    this.sharedService.sharedSandwichId.subscribe(sharedSandwichId => sandwichId = sharedSandwichId)
    console.log( "new SandwichApiService : sandwichId: " + sandwichId );

    this.ingredient2sDataCollection = this._afs.collection<IIngredient>(
        "sandwich_data" ,
        ref => ref.where('sandwichId','==', sandwichId )
        );

    
  }

  getIngredientData(): Observable<IIngredient[]>{
    this.ingredient2sData = this.ingredient2sDataCollection.valueChanges(  { idField:'id'}  );
    this.ingredient2sData.subscribe( data => console.log( "getIngredient2sData: " + JSON.stringify(data) ) );
    return this.ingredient2sData;
  }


  addIngredientData( ingredient:IIngredient ): void {
    this.ingredient2sDataCollection.add(JSON.parse(JSON.stringify(ingredient)));
  }

  
  
  
  delIngredient2Data( ingredient2Id: string ): void{
    console.log( "delIngredient2Data 1:  " + ingredient2Id )
    this.ingredient2sDataCollection.doc(ingredient2Id).delete();
  }

  private handleError( err:HttpErrorResponse ) {
    console.log( 'SandwichApiService: ' + err.message )
    return Observable.throw(err.message);
  }

}
