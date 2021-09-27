import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-template',
  templateUrl: './comments-template.component.html',
  styleUrls: ['./comments-template.component.scss']
})
export class CommentsTemplateComponent implements OnInit {

  @Input() content!: any;
  @Input() author!: any;
  @Input() created!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
