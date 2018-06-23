import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Http,Response, Headers, RequestOptions } from '@angular/http';  
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  loggedIn = this.isUserLoggedIn();

  constructor(private http: Http) { }

  register(user : User) {
    return this.http.put('api/sign-up', user).map((response: Response) => response.json());
  }

  login(user : User) {
    return this.http.put('api/log-in', user).map((response: Response) => response.json());  
  }

  logout() {
    return this.http.get('api/log-out').map((response: Response) => response.json());
  }

  updateCart(products : any) {
    return this.http.patch('api/update-cart', products).map((response: Response) => response.json());
  }

  getUserCart(id : String) {
    return this.http.get(`api/user/${id}/cart`).map((response: Response) => response.json());
  }

  isUserLoggedIn() {
    return (document.cookie.split("username=")[1] != "");
  }

}
