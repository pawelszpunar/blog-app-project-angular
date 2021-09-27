import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const endpoint = 'http://localhost:8080/posts';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  collection: any;
  p!: number
  itemsPerPage = 5;
  totalItems: any;

  constructor(private http: HttpClient) { }

  // getAllPosts(params: any): Observable<any> {
  //   return this.http.get(endpoint, { params });
  // }

  getPostsPage(page: any) {
    const url = `http://localhost:8080/posts?page=${page}&size=${this.itemsPerPage}`;
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.collection = data;
      this.totalItems = data.totalPosts;

    })
  }

}
