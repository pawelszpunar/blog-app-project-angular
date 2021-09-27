import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-template',
  templateUrl: './post-template.component.html',
  styleUrls: ['./post-template.component.scss']
})
export class PostTemplateComponent implements OnInit {

  @Input() uuid!: string;
  @Input() title!: string;
  @Input() content!: any;
  @Input() author!: any;
  @Input() created!: any;
  @Input() numberOfComments!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
