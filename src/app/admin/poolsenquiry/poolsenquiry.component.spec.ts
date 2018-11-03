import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsenquiryComponent } from './poolsenquiry.component';

describe('PoolsenquiryComponent', () => {
  let component: PoolsenquiryComponent;
  let fixture: ComponentFixture<PoolsenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolsenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolsenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
