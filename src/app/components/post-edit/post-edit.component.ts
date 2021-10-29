import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  uuid: any; 

  constructor(private route: ActivatedRoute) {
    this.uuid = this.route.snapshot.paramMap.get('uuid');
  }

  ngOnInit(): void {
  }

}
