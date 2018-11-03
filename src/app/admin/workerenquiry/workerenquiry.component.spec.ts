import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerenquiryComponent } from './workerenquiry.component';

describe('WorkerenquiryComponent', () => {
  let component: WorkerenquiryComponent;
  let fixture: ComponentFixture<WorkerenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
