import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-comments-add',
  templateUrl: './comments-add.component.html',
  styleUrls: ['./comments-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsAddComponent implements OnInit {

  @Output() commentAdded = new EventEmitter<boolean>();

  minContent = 3;
  maxContent = 100;
  addcommentForm!: FormGroup;
  isloaded = false;

  toggle: boolean = true;

  @Input() username: any;
  @Input() post_uuid: any;
  // @Input() isCommentadded!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {  }

  ngOnInit(): void {
    this.addcommentForm = this.formBuilder.group({
      content: ['', [Validators.required, Validators.minLength(this.minContent), Validators.maxLength(this.maxContent)]]
      });
  }

  myForm = new FormGroup({
    content: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  get getControl(){
    return this.addcommentForm.controls;
  }

  addComment() {

    this.authService.addComment({
      content: this.addcommentForm.controls.content.value,
      author: this.username
    }, this.post_uuid, this.username).subscribe(
      (response) => {
        this.toggle = !this.toggle;
        console.log("Comment added");
        this.toggle= !this.toggle;
        console.log(this.toggle);
        this.commentAdded.emit(this.toggle);
      },
      (error) => {
        console.log("Adding comment failed: " + error);
      }
    )

  }





  switchToggle() {
    this.toggle = !this.toggle;
  }

}
