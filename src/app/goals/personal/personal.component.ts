import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Goal } from '../goal';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  personalGoal: Goal;
  personalGoalForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalGoal = this.getGoal();
    this.personalGoalForm = this.toFormGroup(this.personalGoal);
  }

  private getGoal(): Goal {

    return;
  }

  private toFormGroup(data: Goal): FormGroup {
    const formGroup = this.fb.group({
      GoalId: 1,
      Name: ['', Validators.required],
      GoalDescription: ['', Validators.required]
    });

    return formGroup;
  }
}
