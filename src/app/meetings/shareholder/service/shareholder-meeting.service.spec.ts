import { TestBed, inject } from '@angular/core/testing';

import { ShareholderMeetingService } from './shareholder-meeting.service';

describe('ShareholderMeetingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareholderMeetingService]
    });
  });

  it('should be created', inject([ShareholderMeetingService], (service: ShareholderMeetingService) => {
    expect(service).toBeTruthy();
  }));
});
