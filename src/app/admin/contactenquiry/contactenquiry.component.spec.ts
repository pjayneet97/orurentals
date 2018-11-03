import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenquiryComponent } from './contactenquiry.component';

describe('ContactenquiryComponent', () => {
  let component: ContactenquiryComponent;
  let fixture: ComponentFixture<ContactenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
