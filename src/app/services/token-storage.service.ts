import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from './dialog.service';
import { JwtService } from './jwt.service';

const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refresh_token';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  result: string = '';
  token: any;
  tokenjson: any;

  constructor(
    private dialog: DialogService, 
    private router: Router,
    private jwtService: JwtService) { }

  signOut(): void {
    if(window.localStorage.length != 0) {
      this.dialog
      .confirmDialog({
        title: 'Confirm Action',
        message: 'Are you sure you want to log out?',
        confirmCaption: 'Confirm',
        cancelCaption: 'Cancel',
      })
      .subscribe((confirmed) => {
        if (confirmed) {
          console.log('The user confirmed the action');
          window.localStorage.clear();
          console.log("localstorage cleared!");
          this.router.navigate(['/']);
        }
      });
    }
  }

  forceSignOut() {
    console.log("force " + window.localStorage.length)
    if(window.localStorage.length != 0) {
      window.localStorage.clear();
    }
  }

  tokenToJsonObject() {
    this.token = this.getToken();
    if(this.token) {
      this.tokenjson = JSON.parse(JSON.stringify(this.jwtService.decodeToken(this.token)));
      return this.tokenjson;
    } else {
      return null;
    }
  }

  getUsernameFromToken() {
    return this.tokenToJsonObject().sub;
  }

  getRolesFromToken() {
    return this.tokenToJsonObject().roles;
  }

  public saveTokens(token: any): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(REFRESH_TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token.access_token);
    window.localStorage.setItem(REFRESH_TOKEN_KEY, token.refresh_token);
  }

  public saveToken(token: any): void {
    window.localStorage.removeItem(TOKEN_KEY);    
    window.localStorage.setItem(TOKEN_KEY, token.access_token);
  }

  public saveRefreshToken(token: any): void {
    window.localStorage.removeItem(REFRESH_TOKEN_KEY);
    window.localStorage.setItem(REFRESH_TOKEN_KEY, token.refresh_token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public getRefreshToken(): string | null {
    return window.localStorage.getItem(REFRESH_TOKEN_KEY)
      ;
  }
}
