import { TestBed, inject } from '@angular/core/testing';

import { ShareholderPrintService } from './shareholder-print.service';

describe('ShareholderPrintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareholderPrintService]
    });
  });

  it('should be created', inject([ShareholderPrintService], (service: ShareholderPrintService) => {
    expect(service).toBeTruthy();
  }));
});
