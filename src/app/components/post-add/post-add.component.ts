import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {  

  private url = 'http://localhost:8080/admin/addpost';

  minTitle = 3;
  maxTitle = 40;
  minContent = 3;
  maxContent = 3000;
  addpostForm!: FormGroup;


  ngOnInit(): void {
    this.addpostForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(this.minTitle), Validators.maxLength(this.maxTitle)]],
      content: ['', [Validators.required, Validators.minLength(this.minContent), Validators.maxLength(this.maxContent)]]
      });
  }

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder) {
  }

  get getControl(){
    return this.addpostForm.controls;
  }

  addPost() {
    let params = new HttpParams({
      fromObject: {
        username: this.addpostForm.controls.title.value,
        password: this.addpostForm.controls.content.value
      },
    });
    console.log(params);
    
  }

// createPost(form: NgForm) {

//   let headers = new HttpHeaders().set('Content-Type', 'application/json')
  
//   console.log(headers); 

//   this.http.post(this.url, JSON.stringify(form), { headers: headers })
//   .subscribe(response => {
//     console.log(response);
//   });
// }



}
