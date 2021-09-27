import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAllpostsComponent } from './post-allposts.component';

describe('PostAllpostsComponent', () => {
  let component: PostAllpostsComponent;
  let fixture: ComponentFixture<PostAllpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAllpostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAllpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
