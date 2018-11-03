import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooltutorComponent } from './schooltutor.component';

describe('SchooltutorComponent', () => {
  let component: SchooltutorComponent;
  let fixture: ComponentFixture<SchooltutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchooltutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooltutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
