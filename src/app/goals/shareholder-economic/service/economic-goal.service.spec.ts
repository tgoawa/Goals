import { TestBed, inject } from '@angular/core/testing';

import { EconomicGoalService } from './economic-goal.service';

describe('EconomicGoalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EconomicGoalService]
    });
  });

  it('should be created', inject([EconomicGoalService], (service: EconomicGoalService) => {
    expect(service).toBeTruthy();
  }));
});
