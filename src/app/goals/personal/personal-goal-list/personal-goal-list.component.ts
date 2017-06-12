import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { PersonalGoalService } from '../service/personal-goal.service';
import { TeamMemberService, TeamMember } from '../../../teamMember/';
import { Goal } from '../../goal';

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

  constructor(private pgService: PersonalGoalService, private toastrService: ToastrService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    console.log(this.teamMember);
    this.getGoals(this.teamMember.TeamMemberId);
  }

  getGoals(id: number) {
    this.isLoading = true;
    this.pgService.getPersonalGoals(id)
    .subscribe(data => {
      this.isLoading = false;
      this.personalGoalList = data;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }

  onEdit(goal: Goal) {
    console.log(goal);
    this.goalToEdit = goal;
  }

  onAdd() {
    this.newGoal = {
      GoalId: 0,
      GoalTypeId: 1,
      GoalWIGId: 0,
      GoalCompetencyTypeId: 0,
      GoalCompetencyId: 0,
      GoalCompletionPercentage: 0,
      GoalDescription: '',
      IndustryTeamId: 0,
      IndustryTeam: null,
      IsCompleted: false,
      Name: '',
      TeamMemberId: this.teamMember.TeamMemberId, // TODO: Replace with teamMemberId from TeamMember object
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
    this.toastrService.success('Goal Updated!', 'Goal was updated successfully!');
  }

  showSuccessAdd() {
    this.toastrService.success('Goal Added!', 'New Goal was added!');
  }
}
