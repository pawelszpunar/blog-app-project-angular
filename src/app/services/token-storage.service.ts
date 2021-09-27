import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogService } from './dialog.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  result: string = '';

  constructor(private dialog: DialogService, private router: Router) { }

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
      




    


    // constructor(public dialog: MatDialog) { }
    
    // if(window.localStorage.length != 0) {
    //   const message = `Are you sure you want to Logout?`;
    //   const dialogData = new ConfirmDialogModel("Confirm Action", message);
    //   const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    //     maxWidth: "400px",
    //     data: dialogData
    //   });  
    //   dialogRef.afterClosed().subscribe(dialogResult => {
    //     this.result = dialogResult;
    //   });
    //   console.log('result: ' + this.result);   
    // } 

      
      
    

    
  }

  public saveToken(token: any): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem('token', token.access_token);
    window.localStorage.setItem('refresh_token', token.refresh_token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}



// signOut(): void {
//   window.sessionStorage.clear();
// }

// public saveToken(token: string): void {
//   window.sessionStorage.removeItem(TOKEN_KEY);
//   window.sessionStorage.setItem(TOKEN_KEY, token);
// }

// public getToken(): string | null {
//   return window.sessionStorage.getItem(TOKEN_KEY);
// }

// public saveUser(user: any): void {
//   window.sessionStorage.removeItem(USER_KEY);
//   window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
// }

// public getUser(): any {
//   const user = window.sessionStorage.getItem(USER_KEY);
//   if (user) {
//     return JSON.parse(user);
//   }

//   return {};
// }
