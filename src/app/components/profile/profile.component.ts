import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username = this.tokenStorageService.getUsernameFromToken();
  roles = this.tokenStorageService.getRolesFromToken();
  user: any;

  constructor(
    private tokenStorageService: TokenStorageService, 
    private jwtService: JwtService,
    private http: HttpClient) {
      http.get('http://localhost:8080/post/uuid/')
    .subscribe(response => {
      this.user = response;
      console.log(response);
    }),
    catchError((err) => {
        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
    })
    }

  ngOnInit(): void {
  }

  







}
