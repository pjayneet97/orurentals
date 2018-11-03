import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingtutorComponent } from './coachingtutor.component';

describe('CoachingtutorComponent', () => {
  let component: CoachingtutorComponent;
  let fixture: ComponentFixture<CoachingtutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachingtutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachingtutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
