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
    this.teamMember = this.tmService.teamMember;
    this.getGoals(this.teamMember.TeamMemberId);
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
    this.newGoal = {
      GoalId: 0,
      GoalTypeId: 3,
      GoalWIGId: 0,
      GoalCompetencyTypeId: null,
      GoalCompetencyId: null,
      GoalCompletionPercentage: 0,
      GoalDescription: '',
      IndustryTeamId: 0,
      IndustryTeams: null,
      IsCompleted: false,
      Name: '',
      TeamMemberId: this.teamMember.TeamMemberId,
      Weight: 0,
      DisplayDateCreated: '',
      DisplayDateModified: '',
      DisplayDateCompleted: '',
      Actions: [{
        ActionId: 0,
        GoalId: 0,
        Action: '',
        IsCompleted: false,
        DisplayDateCreated: '',
        DisplayDateModified: '',
        DisplayDateDue: '',
        IsDirty: false
      }],
      Measurements: [{
        MeasurementId: 0,
        GoalId: 0,
        Measurement: '',
        DisplayDateCreated: '',
        DisplayDateModified: '',
        IsDirty: false
      }],
      Supports: [{
        SupportId: 0,
        GoalId: 0,
        Support: '',
        DisplayDateCreated: '',
        DisplayDateModified: '',
        IsDirty: false
      }],
      Notes: []
    };

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
