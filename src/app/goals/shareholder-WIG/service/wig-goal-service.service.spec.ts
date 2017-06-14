import { TestBed, inject } from '@angular/core/testing';

import { WigGoalServiceService } from './wig-goal-service.service';

describe('WigGoalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WigGoalServiceService]
    });
  });

  it('should ...', inject([WigGoalServiceService], (service: WigGoalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
