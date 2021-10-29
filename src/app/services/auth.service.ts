import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';



const AUTH_API = 'http://localhost:8080';

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  token!: string | null;
  role!: any;
  tokenresponse: any;
  //private rolesList = [];

  constructor(
    private http: HttpClient, 
    private tokenStorageService: TokenStorageService) {
  }

  login(credentials: HttpParams): Observable<any> {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
   return this.http.post(`${AUTH_API}/login`, credentials, httpOptions)
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
    return this.http.post(`${AUTH_API}/api/user/save`, JSON.stringify(credentials), httpOptions);
  }

  addPost(credentials: any): Observable<any> {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(`${AUTH_API}/admin/post`, JSON.stringify(credentials), httpOptions);
  }

  showPost(uuid: string) {
    return this.http.get(`${AUTH_API}/post/uuid/` + uuid)
  }

  addComment(credentials: any, uuid: string, username: string): Observable<any> {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(`${AUTH_API}/comment/post/${uuid}?user=${username}`, JSON.stringify(credentials), httpOptions);
  }

  showComments(uuid: string) {
    return this.http.get(`${AUTH_API}/comments/for-post/` + uuid)
  }

  getAllPosts(apiPage: number, itemsPerPage: number) {
    return this.http.get(`${AUTH_API}/posts?page=${apiPage}&size=${itemsPerPage}`);
  }

  upload(credentials: any): Observable<any> {

    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(`${AUTH_API}/admin/image`, JSON.stringify(credentials), httpOptions);
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

  refreshToken(token: string) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token })
    };
    return this.http.get(`${AUTH_API}/api/token/refresh`, httpOptions);
  }

  refreshTokenByPost(token: string) {
    return this.http.post(`${AUTH_API}/api/token/refresh`, token);
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
    return throwError(errorMessage);
  }
}