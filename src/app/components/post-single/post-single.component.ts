import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss']
})
export class PostSingleComponent implements OnInit {

  posts: any = [];
  comments: any = [];
  uuid!: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {

    this.uuid = this.route.snapshot.paramMap.get('uuid');

    http.get('http://localhost:8080/post/uuid/' + this.uuid)
    .subscribe(response => {
      this.posts = response;
      console.log(response);
    }),
    catchError((err) => {
        throw 'Error in source. Details: ' + err; // Use console.log(err) for detail
    })
  }


  showComments(uuid: string) {
    console.log('TEST: ' + uuid);
    this.http.get('http://localhost:8080/comments/for-post/' + uuid)
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

}
