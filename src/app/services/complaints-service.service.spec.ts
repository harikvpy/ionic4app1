import { TestBed, inject } from '@angular/core/testing';

import { ComplaintsServiceService } from './complaints-service.service';

describe('ComplaintsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComplaintsServiceService]
    });
  });

  it('should be created', inject([ComplaintsServiceService], (service: ComplaintsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
