import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

  minTitle = 3;
  maxTitle = 140;
  minContent = 3;
  maxContent = 10000;
  addpostForm!: FormGroup;
  postadded = false;
  imagepreview: any;

  name: any;
  type: any;
  data: any;
  imageBase64!: string;
  fileData: any;
  newFileName: any

  imageSrc: string = '';
  myForm = new FormGroup({
   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
   file: new FormControl('', [Validators.required]),
   fileSource: new FormControl('', [Validators.required]),
   newName: new FormControl()
 });


  ngOnInit(): void {
    this.addpostForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(this.minTitle), Validators.maxLength(this.maxTitle)]],
      content: ['', [Validators.required, Validators.minLength(this.minContent), Validators.maxLength(this.maxContent)]],

      name: new FormControl(),
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl(),
      newName: new FormControl()
      });
  }

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private authService: AuthService) {
  }

  get getControl(){
    return this.addpostForm.controls;
  }

  addPost() {

    this.imageBase64 = this.data.split("base64,")[1];
    //console.log(this.addpostForm);

    this.authService.addPost({
      title: this.addpostForm.controls.title.value,
      content: this.addpostForm.controls.content.value,
      imagename: this.addpostForm.controls.content.value,
      imagetype: this.type,
      image: this.imageBase64
    }).subscribe(
      (response) => {
        console.log("Post added");
        this.postadded = true;
      },
      (error) => {
        console.log("Adding post failed: " + error);
      }
    )

  }



  get f(){
    return this.myForm.controls;
  }
 
   
 
  onFileChange(event:any) {
   //console.log(event);
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
       this.newFileName = file.name;
       this.imageSrc = reader.result as string;
       this.name = file.name;
       this.type = file.type;
       this.data = reader.result;

       this.imagepreview = this.data.split("base64,")[1];
       //this.fileToSend = file;
 
 
       //  this.myForm.patchValue({
       //    fileSource: reader.result,
       //  });
      };
    }
  }
 
  //  submit(event: any){
  //    console.log(this.newFileName);
  //    this.dataSplited = this.data.split("base64,")[1];
  //    this.fileData = this.newFileName + ','+ this.type + ',' + this.dataSplited;
  //    this.http.post('**/admin/image', this.fileData)
  //      .subscribe(res => {
  //        console.log(res);
  //        alert('Uploaded Successfully.');
  //      })
  //  }
 
    













// createPost(form: NgForm) {

//   let headers = new HttpHeaders().set('Content-Type', 'application/json')
  
//   console.log(headers); 

//   this.http.post(this.url, JSON.stringify(form), { headers: headers })
//   .subscribe(response => {
//     console.log(response);
//   });
// }



}
