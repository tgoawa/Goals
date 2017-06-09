import { TestBed, inject } from '@angular/core/testing';

import { TeamMemberService } from './team-member.service';

describe('TeamMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamMemberService]
    });
  });

  it('should ...', inject([TeamMemberService], (service: TeamMemberService) => {
    expect(service).toBeTruthy();
  }));
});
