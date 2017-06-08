import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { PersonalGoalService } from '../service/personal-goal.service';

import { Goal, Action, Measurement, Support, Note } from '../../goal';

@Component({
  selector: 'app-add-personal-goal',
  templateUrl: './add-personal-goal.component.html',
  styleUrls: ['./add-personal-goal.component.scss']
})
export class AddPersonalGoalComponent implements OnInit, AfterViewInit {
  @ViewChild('addModal') addModal: ModalDirective;
  @Input('personalGoal') personalGoal: Goal;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  addPersonalGoalForm: FormGroup;

  constructor(private fb: FormBuilder, private pgService: PersonalGoalService) { }

  ngOnInit() {
    this.addPersonalGoalForm = this.toFormGroup(this.personalGoal);
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
    this.addModal.show();
  }

  hideModal() {
    this.addModal.hide();
    this.modalIsClosed();
  }

  modalIsClosed() {
    this.modalClosed.emit(true);
  }

  saveGoal(goal: Goal) {
    this.pgService.savePersonalGoal(goal)
    .subscribe(data => {
      this.pgService.getPersonalGoals(data.TeamMemberId);
      this.hideModal();
    }, error => {
      console.log(error);
    });
  }

  onSubmit(formValue: Goal) {
   this.saveGoal(formValue);
  }
}
