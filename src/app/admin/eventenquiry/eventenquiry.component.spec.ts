import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventenquiryComponent } from './eventenquiry.component';

describe('EventenquiryComponent', () => {
  let component: EventenquiryComponent;
  let fixture: ComponentFixture<EventenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
