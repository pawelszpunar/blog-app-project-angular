import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsTemplateComponent } from './comments-template.component';

describe('CommentsTemplateComponent', () => {
  let component: CommentsTemplateComponent;
  let fixture: ComponentFixture<CommentsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
