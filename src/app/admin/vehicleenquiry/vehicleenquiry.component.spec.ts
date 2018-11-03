import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleenquiryComponent } from './vehicleenquiry.component';

describe('VehicleenquiryComponent', () => {
  let component: VehicleenquiryComponent;
  let fixture: ComponentFixture<VehicleenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
