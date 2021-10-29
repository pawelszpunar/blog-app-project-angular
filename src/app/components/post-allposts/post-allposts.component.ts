import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-post-allposts',
  templateUrl: './post-allposts.component.html',
  styleUrls: ['./post-allposts.component.scss']
})
export class PostAllpostsComponent implements OnInit {

  posts: any;
  itemsPerPage: number = 5;
  totalItems: any;
  page: number = 0;

  data: any;
  //list: any;
  postsOnly: any;
  metadata: any;
  //currentPage: any;

  apiPage: any;

  //dataSource = new MatTableDataSource<any>();  

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.getPage(this.page, this.itemsPerPage);
  }

getPage(page: number, itemsPerPage: number) {

  this.apiPage = page > 0 ? page - 1 : 0;
  this.itemsPerPage = itemsPerPage;

  this.authService.getAllPosts(this.apiPage, this.itemsPerPage)
    .subscribe((data: any) => {
      //console.log(data);
      this.posts =  data;
      this.postsOnly = data.content;
      this.metadata = data.metadata;
      this.itemsPerPage = this.metadata.size;
      this.totalItems = this.metadata.totalElements;
      //this.totalItems = data.metadata.totalElements;
      //this.list = data.content
    })
  }
}
