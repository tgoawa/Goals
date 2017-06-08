import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
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
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  editPersonalGoalForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editPersonalGoalForm = this.toFormGroup(this.personalGoal);
  }

  ngAfterViewInit() {
    this.showModal();
  }

  private toFormGroup(data: Goal): FormGroup {
    const formGroup = this.fb.group({
      GoalId: data.GoalId,
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
    this.modalIsClosed();
  }

  modalIsClosed() {
    this.modalClosed.emit(true);
  }

  onSubmit(formValue: Goal) {
    console.log(formValue);
  }
}
