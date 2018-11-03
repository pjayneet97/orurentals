import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedrentalsComponent } from './appliedrentals.component';

describe('AppliedrentalsComponent', () => {
  let component: AppliedrentalsComponent;
  let fixture: ComponentFixture<AppliedrentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedrentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedrentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
