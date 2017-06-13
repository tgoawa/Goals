import { TestBed, inject } from '@angular/core/testing';

import { IndustryGoalService } from './industry-goal.service';

describe('IndustryGoalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndustryGoalService]
    });
  });

  it('should ...', inject([IndustryGoalService], (service: IndustryGoalService) => {
    expect(service).toBeTruthy();
  }));
});
