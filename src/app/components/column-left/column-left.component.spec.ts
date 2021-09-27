import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnLeftComponent } from './column-left.component';

describe('ColumnLeftComponent', () => {
  let component: ColumnLeftComponent;
  let fixture: ComponentFixture<ColumnLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
