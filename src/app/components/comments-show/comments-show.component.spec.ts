import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsShowComponent } from './comments-show.component';

describe('CommentsShowComponent', () => {
  let component: CommentsShowComponent;
  let fixture: ComponentFixture<CommentsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
