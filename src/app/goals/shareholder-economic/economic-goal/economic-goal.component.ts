import { Component, OnInit } from '@angular/core';

import { TeamMemberService, TeamMember } from '../../../teamMember';
import { EconomicGoalService } from '../service/economic-goal.service';

import { EconomicGoal } from '../model/detail';

@Component({
  selector: 'app-economic-goal',
  templateUrl: './economic-goal.component.html',
  styleUrls: ['./economic-goal.component.scss']
})
export class EconomicGoalComponent implements OnInit {
  economicGoal: EconomicGoal;
  teamMember: TeamMember;

  constructor(private goalService: EconomicGoalService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    this.getEconomicGoals();
  }

  getEconomicGoals() {
    this.goalService.getEconomicGoals(this.teamMember.TeamMemberId)
    .subscribe(data => {
      console.log(data);
      this.economicGoal = data;
    }, error => {
      console.log(error);
    })
  }
}
