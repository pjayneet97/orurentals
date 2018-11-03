import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItenquiryComponent } from './itenquiry.component';

describe('ItenquiryComponent', () => {
  let component: ItenquiryComponent;
  let fixture: ComponentFixture<ItenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
