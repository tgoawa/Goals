import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { PersonalGoalService } from '../service/personal-goal.service';
import { TeamMemberService, TeamMember } from '../../../teamMember/';
import { Goal } from '../../goal';

import * as _ from 'lodash';
@Component({
  selector: 'app-personal-goal-list',
  templateUrl: './personal-goal-list.component.html',
  styleUrls: ['./personal-goal-list.component.scss']
})
export class PersonalGoalListComponent implements OnInit {

  personalGoalList: Goal[];
  newGoal: Goal;
  goalToEdit: Goal;
  isLoading = false;

  private teamMember: TeamMember;

  constructor(private cgService: PersonalGoalService, private toastrService: ToastrService, private tmService: TeamMemberService) { }

  ngOnInit() {
  this.getEmulatedTeamMember();
  }

  getEmulatedTeamMember() {
    this.tmService.emulatedTeamMember
      .subscribe(data => {
        this.teamMember = data;
        this.getGoals(this.teamMember.TeamMemberId);
      }, error => {
        console.log(error);
      });
  }

  getGoals(id: number) {
    this.isLoading = true;
    this.cgService.getCompetencyGoals(id)
    .subscribe(data => {
      this.isLoading = false;
      this.personalGoalList = data;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }

  onEdit(goal: Goal) {
    this.goalToEdit = _.cloneDeep(goal);
  }

  onAdd() {
    this.newGoal = new Goal(3, this.teamMember.TeamMemberId, null);
    console.log(this.newGoal);
  }

  clearGoalToEdit() {
    this.goalToEdit = undefined;
  }

  clearNewGoal() {
    this.newGoal = undefined;
  }

  refreshListUpdate() {
    this.showSuccessUpdate();
    this.getGoals(this.teamMember.TeamMemberId);
  }

  refreshListAdd() {
    this.showSuccessAdd();
    this.getGoals(this.teamMember.TeamMemberId);
  }

  showSuccessUpdate() {
    this.toastrService.success('', 'Goal was updated successfully!');
  }

  showSuccessAdd() {
    this.toastrService.success('', 'New Goal was added!');
  }
}
