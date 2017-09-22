import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { WigGoalServiceService } from '../service/wig-goal-service.service';
import { TeamMemberService, TeamMember } from '../../../teamMember/';
import { Goal } from '../../goal';

import * as _ from 'lodash';
@Component({
  selector: 'app-wig-goal-list',
  templateUrl: './wig-goal-list.component.html',
  styleUrls: ['./wig-goal-list.component.scss']
})
export class WigGoalListComponent implements OnInit {

  wigGoalList: Goal[];
  newGoal: Goal;
  goalToEdit: Goal;
  isLoading = false;

  private teamMember: TeamMember;

  constructor(private wgService: WigGoalServiceService, private toastrService: ToastrService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    this.getGoals(this.teamMember.TeamMemberId);
  }

  getGoals(id: number) {
    this.isLoading = true;
    this.wgService.getWigGoals(id)
    .subscribe(data => {
      this.isLoading = false;
      this.wigGoalList = data;
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
      GoalTypeId: 4,
      GoalWIGId: 0,
      GoalCompetencyTypeId: 0,
      GoalCompetencyId: 0,
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
