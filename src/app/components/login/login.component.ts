import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpParams } from '@angular/common/http';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  minUsername = 3;
  maxUsername = 12;
  minPassword = 3;
  maxPassword = 30;
  loginForm!: FormGroup;


  constructor(
    private router: Router, 
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(this.minUsername), Validators.maxLength(this.maxUsername)]],
      password: ['', [Validators.required, Validators.minLength(this.minPassword), Validators.maxLength(this.maxPassword)]]
      });
  }

  get getControl(){
    return this.loginForm.controls;
  }

  onSubmit() {
    let params = new HttpParams({
      fromObject: {
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value
      },
    });
    this.authService.login(params)
      .subscribe(
        (response) => {
          this.tokenStorage.saveTokens(response);

          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);

          // let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          // this.router.navigate([returnUrl]);
          // this.returnUrl = this.route.queryParams.subscribe(retUrl => { this.returnUrl = retUrl.returnUrl; });
          // this.router.navigate([this.returnUrl]);
          // returnUrl = '..' + returnUrl;
          // this.router.navigate([returnUrl||'/']);
        },
        (error) => {
          console.log("ERROR!")
        }
      )
  }

}



  // signIn() {
  //   let params = new HttpParams({
  //          fromObject: { username: this.username, password: this.password },
  //        });
  //   this.authService.login(params)
  //     .subscribe(result => { 
  //       if (result) {


  //         this.tokenStorage.saveToken(result);
  //         this.invalidLogin = false;
  //         this.isLoggedIn = true;

          
          
  //         let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');         

  //         console.log("returnUrl: " + returnUrl);

  //         if (!returnUrl) {

  //           this.router.navigate(['/']);
  //           console.log('AAAA');
  //         } else {
            
  //           console.log("returnUrl: " + returnUrl);
  //           this.router.navigate([returnUrl]);
  //           console.log('BBBB');
  //         }



          
  //       }          
  //       else
  //       console.log("ERROR!")
  //         this.invalidLogin = true; 
  //     });
  // }

          //console.log("OK!")
          
          //console.log(result)
          //this.roles = this.tokenStorage.getUser().roles;
          // this.router.navigateByUrl(this.returnUrl);
          //this.returnUrl = this.route.queryParams.subscribe(retUrl => { this.returnUrl = retUrl.returnUrl; });
          //this.router.navigate([this.returnUrl]);
//returnUrl = '..' + returnUrl;
          //this.router.navigate([returnUrl||'/']);
