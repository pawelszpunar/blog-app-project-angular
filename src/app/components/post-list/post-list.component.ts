import { HttpClient } from '@angular/common/http';
import { Component, OnInit, QueryList } from '@angular/core';
import { PostTemplateComponent } from '../templates/post-template/post-template.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  // @ViewChild('post') components!: QueryList<PostTemplateComponent>;
  // uuid = posts.uuid;
  // title = post.title;
  // content = post.content;
  // created = post.created;
  // numberOfComments = post.numberOfComments;

  posts: any = [];  

  constructor(http: HttpClient) {
    http.get('http://localhost:8080/posts?size=3&page=0')
    .subscribe(response => {
      this.posts = response;
      //console.log(response);
    })
  }

  ngOnInit(): void {
  } 

}
