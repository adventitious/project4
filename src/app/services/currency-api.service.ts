import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable  } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CurrencyResponse} from '../interfaces/currency-response';

@Injectable({
  providedIn: 'root'
})

export class CurrencyApiService {

  private _siteURL= "http://api.currencylayer.com/live";
  private _key= "?access_key=18d4fe107778434f1459ef0857e93acd&currencies=chf,eur,JPY&format=1";

  constructor(  private _http:HttpClient ) { }

  getCurrencyData(): Observable<CurrencyResponse>
  {
    return this._http.get<CurrencyResponse>( this._siteURL+this._key )
    .pipe(
      tap(data => console.log('Currencydata/error' + JSON.stringify(data))
    ),
      catchError(this.handleError)
    );

  }




  
  private handleError( err:HttpErrorResponse ){
    console.log('CurrencyApiService: ' + err.message );
    return Observable.throw(err.message );
  }
}