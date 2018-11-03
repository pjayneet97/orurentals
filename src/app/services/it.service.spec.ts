import { TestBed, inject } from '@angular/core/testing';

import { ItService } from './it.service';

describe('ItService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItService]
    });
  });

  it('should be created', inject([ItService], (service: ItService) => {
    expect(service).toBeTruthy();
  }));
});
