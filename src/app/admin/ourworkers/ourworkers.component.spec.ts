import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurworkersComponent } from './ourworkers.component';

describe('OurworkersComponent', () => {
  let component: OurworkersComponent;
  let fixture: ComponentFixture<OurworkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurworkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
