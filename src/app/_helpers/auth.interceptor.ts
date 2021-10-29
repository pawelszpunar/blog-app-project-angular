import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError, filter, switchMap, take } from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthService
    ) { }

  intercept(req: HttpRequest<Object>, next: HttpHandler): Observable<HttpEvent<Object>> {
    let authReq = req;
    const token = this.tokenStorageService.getToken();
    if (token != null) {
      authReq = this.addTokenHeader(req, token);
    }

    return next.handle(authReq).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && !authReq.url.includes('register') && (error.status === 401 || error.status === 403)) {
        return this.handle401Error(authReq, next);
      }
      if (error instanceof HttpErrorResponse && !authReq.url.includes('register') && error.status === 500) {
        window.localStorage.clear();
        this.isRefreshing = false;
        return throwError(error);
      }
      return throwError(error);
    }));
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const token = this.tokenStorageService.getRefreshToken();

      if (token) {
        return this.authService.refreshTokenByPost(token).pipe(switchMap((token: any) => {
          this.isRefreshing = false;
          this.tokenStorageService.saveTokens(token);
          this.refreshTokenSubject.next(token.access_token);            
          return next.handle(this.addTokenHeader(request, token.access_token));
          }),
          catchError((err) => {
            window.localStorage.clear();
            this.isRefreshing = false;
            //this.tokenStorageService.forceSignOut;
            //console.log("error tokenowy2");
            return throwError(err);
          })
        );
      }
    }
    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
