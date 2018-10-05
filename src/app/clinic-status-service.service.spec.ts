import { TestBed, inject } from '@angular/core/testing';

import { ClinicStatusServiceService } from './clinic-status-service.service';

describe('ClinicStatusServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClinicStatusServiceService]
    });
  });

  it('should be created', inject([ClinicStatusServiceService], (service: ClinicStatusServiceService) => {
    expect(service).toBeTruthy();
  }));
});
