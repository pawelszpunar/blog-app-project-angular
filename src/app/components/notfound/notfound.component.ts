import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(public authService: AuthService) { }

  ngOnInit(): void {

    console.log(this.authService.currentUser.roles)
   

    if(this.authService.currentUser.roles.includes("ROLE_ADMIN")) {
      console.log(this.authService.currentUser);
      console.log("Działa")
    }
    
  }

}
