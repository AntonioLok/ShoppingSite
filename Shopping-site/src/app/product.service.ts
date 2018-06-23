import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Http,Response, Headers, RequestOptions } from '@angular/http';  
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsCheckOut;

  total : number = 0;

  private productsUrl = 'api/products';  // URL to web api

  constructor(private http: Http) { }

  result : any;

  getProducts() {
    return this.http.get(this.productsUrl).map((response: Response) => response.json());
  }

  getProduct(_id: any) {
    const url = `${this.productsUrl}/${_id}`;
    return this.http.get(url).map((response: Response) => response.json());
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}