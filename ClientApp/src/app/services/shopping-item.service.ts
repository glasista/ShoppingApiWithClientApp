import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ShoppingItem } from '../models/shoppingitem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/ShoppingItems/';
  }

  getShoppingItems(): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getShoppingItem(id: number): Observable<ShoppingItem> {
    return this.http.get<ShoppingItem>(this.myAppUrl + this.myApiUrl + id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  saveShoppingItem(shoppingItem): Observable<ShoppingItem> {
    return this.http.put<ShoppingItem>(this.myAppUrl + this.myApiUrl, JSON.stringify(shoppingItem), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  updateShoppingItem(id: number, shoppingItem): Observable<ShoppingItem> {
    return this.http.put<ShoppingItem>(this.myAppUrl + this.myApiUrl + id, JSON.stringify(shoppingItem), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  deleteShoppingItem(id: number): Observable<ShoppingItem> {
    return this.http.delete<ShoppingItem>(this.myAppUrl + this.myApiUrl + id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error) {
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      // get client-side error message
      errorMsg = error.error.message;
    } else {
      // get server-side error message
      errorMsg = 'Error code: ${error.status}\nMessage: ${error.message}';
    }
    console.log(errorMsg);
    return throwError(errorMsg);
  }
}
