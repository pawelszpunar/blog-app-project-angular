import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ChangeDetectionStrategy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss']
})
export class PostSingleComponent implements OnInit {

  posts: any = [];
  comments: any = [];
  uuid!: any;
  username: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, public authService: AuthService, public tokenService: TokenStorageService) {
    if(tokenService.getToken() ) {
      this.username = tokenService.getUsernameFromToken();
    }
    

    this.uuid = this.route.snapshot.paramMap.get('uuid');

    this.authService.showPost(this.uuid)
    .subscribe(response => {
      this.posts = response;
      console.log(response);
    }),
    catchError((err) => {
        throw 'Error in source. Details: ' + err;
    })
  }


  showComments(uuid: string) {
    console.log('TEST: ' + uuid);
    this.authService.showComments(this.uuid)
  .subscribe((response: any) => {
    this.comments = response;
    console.log(response);
  }),
  catchError((err) => {
    throw 'Error in source. Details: ' + err;
  })
  }


  ngOnInit(): void {
    this.showComments(this.uuid);
  }

  onCommentAdded() {
    this.showComments(this.uuid);
  }



}
