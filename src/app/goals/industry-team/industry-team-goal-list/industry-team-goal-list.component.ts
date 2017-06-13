import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { IndustryGoalService } from '../service/industry-goal.service';
import { TeamMemberService, TeamMember } from '../../../teamMember/';
import { Goal } from '../../goal';

@Component({
  selector: 'app-industry-team-goal-list',
  templateUrl: './industry-team-goal-list.component.html',
  styleUrls: ['./industry-team-goal-list.component.scss']
})
export class IndustryTeamGoalListComponent implements OnInit {

  industryGoalList: Goal[];
  newGoal: Goal;
  goalToEdit: Goal;
  isLoading = false;

  private teamMember: TeamMember;

  constructor(private igService: IndustryGoalService, private toastrService: ToastrService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    this.getGoals(this.teamMember.TeamMemberId);
  }

  getGoals(id: number) {
    this.isLoading = true;
    this.igService.getIndustryGoals(id)
    .subscribe(data => {
      this.isLoading = false;
      this.industryGoalList = data;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }

  onEdit(goal: Goal) {
    this.goalToEdit = goal;
  }

  onAdd() {
    this.newGoal = {
      GoalId: 0,
      GoalTypeId: 2,
      GoalWIGId: 0,
      GoalCompetencyTypeId: 0,
      GoalCompetencyId: 0,
      GoalCompletionPercentage: 0,
      GoalDescription: '',
      IndustryTeamId: 0,
      IndustryTeams: this.teamMember.IndustryTeams,
      IsCompleted: false,
      Name: '',
      TeamMemberId: this.teamMember.TeamMemberId,
      Weight: 0,
      DisplayDateCreated: '',
      DisplayDateModified: '',
      Actions: [{
        ActionId: 0,
        GoalId: 0,
        Action: '',
        IsCompleted: false,
        DisplayDateCreated: '',
        DisplayDateModified: '',
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
    this.toastrService.success('Goal Updated!', 'Goal was updated successfully!');
  }

  showSuccessAdd() {
    this.toastrService.success('Goal Added!', 'New Goal was added!');
  }

}
