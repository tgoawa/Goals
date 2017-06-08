import { Component, OnInit } from '@angular/core';

import { PersonalGoalService } from '../service/personal-goal.service';
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

  constructor(private pgService: PersonalGoalService) { }

  ngOnInit() {
    this.getGoals(1936);
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
      IsCompleted: false,
      Name: '',
      TeamMemberId: 1936, //TODO: Replace with teamMemberId from TeamMember object
      Weight: 0,
      DisplayDateCreated: '',
      DisplayDateModified: '',
      Actions: [{
        ActionId: 0,
        GoalId: 0,
        Action: '',
        IsCompleted: false,
        DisplayDateCreated: '',
        DisplayDateModified: ''
      }],
      Measurements: [{
        MeasurementId: 0,
        GoalId: 0,
        Measurement: '',
        DisplayDateCreated: '',
        DisplayDateModified: ''
      }],
      Supports: [{
        SupportId: 0,
        GoalId: 0,
        Support: '',
        DisplayDateCreated: '',
        DisplayDateModified: ''
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
}
