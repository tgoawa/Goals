import { Component, OnInit, Input } from '@angular/core';

import { Goal } from '../../../goals/goal';
import { PrintService } from '../services/print.service';
import { TeamMember, TeamMemberService } from '../../../teamMember/';

@Component({
  selector: 'app-personal-goals',
  templateUrl: './personal-goals.component.html',
  styleUrls: ['./personal-goals.component.scss']
})
export class PersonalGoalsComponent implements OnInit {
  @Input('personalGoal') personalGoal: Goal;

  competency: string;
  competencyType: string;
  teamMember: TeamMember;
  private competencyList: any[];
  private competencyTypeList: any[];

  constructor(private prService: PrintService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    this.getCompetencies();
    this.getCompetencyTypes();
  }

  getCompetencies() {
    this.prService.getCompetencies()
    .subscribe(data => {
      this.competencyList = data;
      this.mapCompetencyText();
    }, error => {
      console.log(error);
    });
  }

  getCompetencyTypes() {
    this.prService.getCompetencyTypes()
    .subscribe(data => {
      this.competencyTypeList = data;
      this.mapCompetencyTypeText();
    }, error => {
      console.log(error);
    });
  }

  mapCompetencyText() {
    for (let index = 0; index < this.competencyList.length; index ++) {
      if (this.personalGoal.GoalCompetencyId === this.competencyList[index].GoalCompetencyId) {
        this.competency = this.competencyList[index].Competency;
      }
    }
  }

  mapCompetencyTypeText() {
    for (let index = 0; index < this.competencyTypeList.length; index ++) {
      if (this.personalGoal.GoalCompetencyTypeId === this.competencyTypeList[index].GoalCompetencyTypeId) {
        this.competencyType = this.competencyTypeList[index].CompetencyType;
      }
    }
  }

}
