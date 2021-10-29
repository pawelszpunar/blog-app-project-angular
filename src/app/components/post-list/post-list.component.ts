import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  page = 0;
  size = 3; //number of posts on first page
  base64image: any

  posts: any = [];  

  constructor(private authService: AuthService) {
    this.authService.getAllPosts(this.page, this.size)
    .subscribe(response => {
      this.posts = response;
    })
  }

  ngOnInit(): void {
  } 

}
