import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentenquiriesComponent } from './rentenquiries.component';

describe('RentenquiriesComponent', () => {
  let component: RentenquiriesComponent;
  let fixture: ComponentFixture<RentenquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentenquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentenquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
