import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-post-allposts',
  templateUrl: './post-allposts.component.html',
  styleUrls: ['./post-allposts.component.scss']
})
export class PostAllpostsComponent implements OnInit {

  posts: any;
  //p = 1;
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPage(this.page, this.itemsPerPage);
  }

getPage(page: number, itemsPerPage: number) {

  this.apiPage = page > 0 ? page - 1 : 0;
  this.itemsPerPage = itemsPerPage;

  const url = `http://localhost:8080/posts?page=${this.apiPage}&size=${this.itemsPerPage}`;  
  this.http.get(url)
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
