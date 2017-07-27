import { TestBed, inject } from '@angular/core/testing';

import { PersonalGoalService } from './personal-goal.service';

describe('CompetencyGoalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalGoalService]
    });
  });

  it('should ...', inject([PersonalGoalService], (service: PersonalGoalService) => {
    expect(service).toBeTruthy();
  }));
});
