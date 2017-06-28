import { TestBed, inject } from '@angular/core/testing';

import { CompetencyGoalService } from './competency-goal.service';

describe('CompetencyGoalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompetencyGoalService]
    });
  });

  it('should ...', inject([CompetencyGoalService], (service: CompetencyGoalService) => {
    expect(service).toBeTruthy();
  }));
});
