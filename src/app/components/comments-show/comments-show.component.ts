import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-comments-show',
  templateUrl: './comments-show.component.html',
  styleUrls: ['./comments-show.component.scss']
})
export class CommentsShowComponent implements OnInit {
  uuid!: string;


  @Input('uuid')
  set Uuid(uuid: string) {
      this.uuid = uuid || 'angular';
  }



  // @Input() uuid: any;

  _uuid: any;

  //uuid: string = "a175c0e4-5ba2-4461-aa65-76a289542e86";
  comments: any = [];

  constructor(private http: HttpClient, public authService: AuthService) {  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('AA>' + this.uuid)
    this.showComments(this.uuid);
    });
    
  }


  showComments(_uuid: string) {
    console.log('TEST: ' + this._uuid);
    this.authService.showComments(_uuid)
  .subscribe(response => {
    this.comments = response;
    console.log(response);
  }),
  catchError((err) => {
    throw 'Error in source. Details: ' + err;
  })
  }

}
