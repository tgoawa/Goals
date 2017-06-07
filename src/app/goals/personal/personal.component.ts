import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Goal, Action, Measurement, Support, Note } from '../goal';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  personalGoal: Goal;
  personalGoalForm: FormGroup;

  //For Testing
  goal: Goal;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalGoal = this.getGoal();
    this.personalGoalForm = this.toFormGroup(this.personalGoal);
  }

  private getGoal(): Goal {
    this.goal = {
      GoalId: 0,
      GoalTypeId: 2,
      GoalWIGId: 0,
      GoalCompetencyId: 25,
      GoalCompetencyTypeId: 22,
      GoalCompletionPercentage: 0,
      GoalDescription: 'Test Description',
      IndustryTeamId: 17,
      IsCompleted: false,
      Name: 'Test Goal',
      TeamMemberId: 1936,
      Weight: 0,
      DisplayDateCreated: 'test creatd',
      DisplayDateModified: 'test modified',
      Actions: [],
      Supports: [],
      Measurements: [],
      Notes: [],

    }
    return this.goal;
  }

  private toFormGroup(data: Goal): FormGroup {
    const formGroup = this.fb.group({
      GoalId: 1,
      Name: ['', Validators.required],
      GoalDescription: ['', Validators.required]
    });

    return formGroup;
  }

  onSubmit(formValue: Goal) {
    console.log(formValue);
  }
}
