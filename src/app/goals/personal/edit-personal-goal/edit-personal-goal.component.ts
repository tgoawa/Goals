import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Goal, Action, Measurement, Support, Note } from '../../goal';


@Component({
  selector: 'app-edit-personal-goal',
  templateUrl: './edit-personal-goal.component.html',
  styleUrls: ['./edit-personal-goal.component.scss']
})
export class EditPersonalGoalComponent implements OnInit {
  @Input('personalGoal') personalGoal: Goal;
  personalGoalForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalGoalForm = this.toFormGroup(this.personalGoal);
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
