import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HometutorComponent } from './hometutor.component';

describe('HometutorComponent', () => {
  let component: HometutorComponent;
  let fixture: ComponentFixture<HometutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
