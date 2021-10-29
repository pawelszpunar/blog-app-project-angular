import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
// export class NotfoundComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


export class NotfoundComponent implements OnInit {

image: any;
  constructor(public authService: AuthService, private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    //this.getImage();
      //this.getrefr();
    }
    
    //token = localStorage.getItem('token');


    // getrefr() {
    //   if(this.token) {
    //     console.log("begin");
    //     return this.authService.refreshTokenWithSaving2(this.token).subscribe(response => {
    //       console.log(response);
    //     })
    //   } else {
    //     console.log("token missing");
    //     return null;
    //   }
      
    // }

    // getrefr() {
    //   console.log("1");
    //   console.log(this.token);
    //   if (this.token) {
    //     console.log("2");
    //     //return this.authService.refreshTokenWithSaving(localStorage.getItem('token') || '{}')
    //     //return this.authService.refreshToken(this.token).pipe(switchMap((token: any) => {
    //     return this.authService.refreshToken(this.token).pipe(
    //       retry(1),
    //       catchError(this.handleError)
    //       ).(switchMap((token: any) => {
    //       console.log("handle401Error-3-inside");
    //       console.log(token);

    //       return token;
    //       //this.isRefreshing = false;

    //       //this.tokenStorageService.saveToken(token.access_token);
    //       //this.refreshTokenSubject.next(token.access_token);
          
    //       //return next.handle(this.addTokenHeader(request, token.access_token));
    //     }),
    //     catchError((err) => {
    //       //this.isRefreshing = false;

    //       console.log("handle401Error-4");
          
    //       //this.tokenStorageService.forceSignOut();
    //       return throwError(err);
    //     }),
    //   );
    //   }
    //   return "token is missing";
    // }

  // subscribeData()
//  {
//    this.getrefr().subscribe(response => {
//      console.log(response);
//    })
//  }
}
    

  // getImage() {
  //   this.image = this.uploadService.getFiles("9392ffcf-b85b-4bb5-9f37-f66a8bd54202").subscribe(
  //     (response) => {
  //       //console.log(response);
  //       console.log(response.data);
  //       this.image = 'data:image/jpeg;base64,' + response.data;

  //     },
  //     (error) => {
  //       console.log("ERROR");
  //       console.log(error);
  //     }
  //   );
  //   console.log(this.image);  



    // console.log(this.authService.currentUser.roles)
   

    // if(this.authService.currentUser.roles.includes("ROLE_ADMIN")) {
    //   console.log(this.authService.currentUser);
    //   console.log("Działa")
    // }
    
 // }
