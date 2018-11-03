import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurtutorsComponent } from './ourtutors.component';

describe('OurtutorsComponent', () => {
  let component: OurtutorsComponent;
  let fixture: ComponentFixture<OurtutorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurtutorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurtutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
