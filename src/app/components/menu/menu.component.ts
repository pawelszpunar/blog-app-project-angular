import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  // loginDisable = (window.localStorage.length !== null);  
  // // color: ThemePalette = 'accent';
  // // checked = false;
  // // disabled = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    
  } 


  logout() {
    this.authService.logout();
  }










}