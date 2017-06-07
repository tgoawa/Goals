import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Goal, Action, Measurement, Support, Note } from '../../goal';


@Component({
  selector: 'app-edit-personal-goal',
  templateUrl: './edit-personal-goal.component.html',
  styleUrls: ['./edit-personal-goal.component.scss']
})
export class EditPersonalGoalComponent implements OnInit {
  @ViewChild('editModal') editModal: ModalDirective;
  @Input('personalGoal') personalGoal: Goal;
  personalGoalForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalGoalForm = this.toFormGroup(this.personalGoal);
  }

  ngAfterViewInit() {
    this.showModal();
  }

  private toFormGroup(data: Goal): FormGroup {
    const formGroup = this.fb.group({
      GoalId: 1,
      Name: [data.Name, Validators.required],
      GoalDescription: [data.GoalDescription, Validators.required]
    });

    return formGroup;
  }

  showModal() {
    this.editModal.show();
  }

  hideModal() {
    this.editModal.hide();
  }

  onSubmit(formValue: Goal) {
    console.log(formValue);
  }
}
