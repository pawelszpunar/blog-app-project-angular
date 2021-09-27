// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { URLSearchParams } from '@angular/http';

// const AUTH_API = 'http://localhost:8080/';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   constructor(private http: HttpClient) { }



//   login(username: string, password: string): Observable<any> {
//     let params = new HttpParams({
//       fromObject: { username: username, password: password},
//     });

//     let httpOptions = {
//       headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
//     };
    
//     console.log(params);
//     return this.http.post(AUTH_API + 'login', params, httpOptions);    
//   }

//   register(username: string, email: string, password: string): Observable<any> {
//     return this.http.post(AUTH_API + 'signup', {
//       username,
//       email,
//       password
//     }, httpOptions);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}

@Injectable()
export class AuthService {

  token!: string | null;
  role!: any;
  private rolesList = [];

  constructor(
    private http: HttpClient, 
    private tokenStorageService: TokenStorageService) {
  }

  login(credentials: HttpParams): Observable<any> {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
   return this.http.post('http://localhost:8080/login', credentials, httpOptions)
      .pipe(
      retry(1),
      catchError(this.handleError)
      );
  }
//JSON.parse

  register(credentials: any): Observable<any> {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post('http://localhost:8080/api/user/save', JSON.stringify(credentials), httpOptions);
  }


  logout() {
    this.tokenStorageService.signOut();
  }

  isLoggedIn() {
    return tokenNotExpired();
  }

  loggedInWithRole(role: string) {
    let token = localStorage.getItem('token');
    if(!token) {
      return false;
    }
    let rolesList = new JwtHelper().decodeToken(token);

    var i = rolesList.roles.length;
    while (i--) {
       if (rolesList.roles[i] === role) {
           return true;
       }
    }
    return false;
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if(!token) {
      return false;
    } else {
      return new JwtHelper().decodeToken(token);
    }
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      // errorMessage = `Error: ${error.error.message}`;
      errorMessage = `Something went wrong. Please try again.`;
    } else {
      // server-side error
      // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      errorMessage = `The username or password is incorrect.`;
    }
    window.alert(errorMessage);

    // console.log("error.error.message: " + error.error.message)
    // console.log("error.status: " + error.status)
    // console.log("error.message" + error.message)

    return throwError(errorMessage);
  }
}