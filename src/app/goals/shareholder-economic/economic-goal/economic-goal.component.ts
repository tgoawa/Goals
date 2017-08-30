import { Component, OnInit } from '@angular/core';

import { TeamMemberService, TeamMember } from '../../../teamMember';
import { EconomicGoalService } from '../service/economic-goal.service';

import { EconomicGoals } from '../model/detail';

@Component({
  selector: 'app-economic-goal',
  templateUrl: './economic-goal.component.html',
  styleUrls: ['./economic-goal.component.scss']
})
export class EconomicGoalComponent implements OnInit {

  economicGoals: EconomicGoals;
  teamMember: TeamMember;
  isLoading = false;

  constructor(private goalService: EconomicGoalService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.getEmulatedTeamMember();
  }

  getEconomicGoals() {
    this.isLoading = true;
    this.goalService.getEconomicGoals(this.teamMember.TeamMemberId)
      .subscribe(data => {
        this.isLoading = false;
        this.economicGoals = data;
      }, error => {
        this.isLoading = false;
        console.log(error);
      })
  }

  getEmulatedTeamMember() {
    this.tmService.emulatedTeamMember
      .subscribe(data => {
        this.teamMember = data;
        this.getEconomicGoals();
      }, error => {
        console.log(error);
      });
  }
}
