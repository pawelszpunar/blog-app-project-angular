import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditpostformComponent } from './addeditpostform.component';

describe('AddeditpostformComponent', () => {
  let component: AddeditpostformComponent;
  let fixture: ComponentFixture<AddeditpostformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditpostformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditpostformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
