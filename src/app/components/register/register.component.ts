import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ConfirmedValidator } from 'src/app/confirm.validator';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//let emailRegex = '/^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  minUsername = 3;
  maxUsername = 12;
  minEmail = 6;
  maxEmail = 30;
  minPassword = 4;
  maxPassword = 30;
  registrationForm!: FormGroup;
  
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(this.minUsername), Validators.maxLength(this.maxUsername)]],
    email: ['', [Validators.required, Validators.minLength(this.minEmail), Validators.maxLength(this.maxEmail)]],
    password: ['', [Validators.required, Validators.minLength(this.minPassword), Validators.maxLength(this.maxPassword)]],
    confirmPassword: ['', [Validators.required]]
    }, { validators: ConfirmedValidator('password', 'confirmPassword')});
  }

  get getControl(){
    return this.registrationForm.controls;
  }
  
  onSubmit(){    
    this.authService.register({
        username: this.registrationForm.controls.username.value,
        email: this.registrationForm.controls.email.value,
        password: this.registrationForm.controls.password.value
      }).subscribe(
        (response) => {
          this.router.navigate(['/login']);
        },
        (error) => {
          this.registrationForm.controls.username.setErrors({'usernameAlreadyTaken': 'Username already taken'});
        }
      )
    }
}