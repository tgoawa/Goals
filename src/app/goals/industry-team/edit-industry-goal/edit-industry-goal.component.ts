import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { IndustryGoalService } from '../service/industry-goal.service';

import { Goal, Action, Measurement, Support, Note } from '../../goal';

@Component({
  selector: 'app-edit-industry-goal',
  templateUrl: './edit-industry-goal.component.html',
  styleUrls: ['./edit-industry-goal.component.scss']
})
export class EditIndustryGoalComponent implements OnInit, AfterViewInit {
  @ViewChild('editModal') editModal: ModalDirective;
  @Input('industryGoal') industryGoal: Goal;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() updateSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();
  editIndustryGoalForm: FormGroup;

  constructor(private fb: FormBuilder, private igService: IndustryGoalService) { }

  ngOnInit() {
    this.editIndustryGoalForm = this.toFormGroup(this.industryGoal);
    this.replaceBreakTags();
  }

  ngAfterViewInit() {
    this.showModal();
  }

   private toFormGroup(data: Goal): FormGroup {
    const formGroup = this.fb.group({
      GoalId: data.GoalId,
      GoalTypeId: data.GoalTypeId,
      GoalWIGId: data.GoalWIGId,
      GoalCompetencyId: data.GoalCompetencyId,
      GoalCompetencyTypeId: data.GoalCompetencyTypeId,
      GoalCompletionPercentage: data.GoalCompletionPercentage,
      IndustryTeamId: data.IndustryTeamId,
      IsCompleted: data.IsCompleted,
      TeamMemberId: data.TeamMemberId,
      Weight: data.Weight,
      DisplayDateCreated: data.DisplayDateCreated,
      DisplayDateModified: data.DisplayDateModified,
      Name: [data.Name, Validators.required],
      GoalDescription: [data.GoalDescription, Validators.required],
    });

    return formGroup;
  }

  replaceBreakTags() {
    if (this.industryGoal.GoalDescription !== null) {
      this.editIndustryGoalForm.patchValue({
        GoalDescription: this.industryGoal.GoalDescription.split('<br>').join('\n')
      });
    }
    return false;
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

  goalUpdateSuccess() {
    this.updateSuccess.emit(true);
  }

  updateGoal(goal: Goal) {
    this.igService.updateIndustryGoal(goal)
      .subscribe(data => {
        this.goalUpdateSuccess();
        this.hideModal();
      }, error => {
        console.log(error);
        this.hideModal();
      });
  }

  onSubmit(formValue: Goal) {
    this.replaceLineBreaks(formValue);
    this.updateGoal(formValue);
  }

  replaceLineBreaks(formValue: Goal) {
    formValue.GoalDescription = this.replaceDescriptionLineBreaks(formValue.GoalDescription);
    formValue.Actions = this.replaceActionLineBreaks(formValue.Actions);
    formValue.Measurements = this.replaceMeasurementLineBreaks(formValue.Measurements);
    formValue.Supports = this.replaceSupportLineBreaks(formValue.Supports);
    formValue.Notes = this.replaceNoteLineBreaks(formValue.Notes);
  }

  replaceDescriptionLineBreaks(goalDescription: string): string {
    goalDescription = goalDescription.replace(/(\r\n|\n|\r)/gm, '<br>');
    return goalDescription;
  }

  replaceActionLineBreaks(action: Action[]): Action[] {
    for (let index = 0; index < action.length; index++) {
      action[index].Action = action[index].Action.replace(/(\r\n|\n|\r)/gm, '<br>');
    }
    return action;
  }

  replaceMeasurementLineBreaks(measurement: Measurement[]): Measurement[] {
    for (let index = 0; index < measurement.length; index++) {
      measurement[index].Measurement = measurement[index].Measurement.replace(/(\r\n|\n|\r)/gm, '<br>');
    }
    return measurement;
  }

  replaceSupportLineBreaks(support: Support[]): Support[] {
    for (let index = 0; index < support.length; index++) {
      support[index].Support = support[index].Support.replace(/(\r\n|\n|\r)/gm, '<br>');
    }
    return support;
  }

  replaceNoteLineBreaks(note: Note[]): Note[] {
    for (let index = 0; index < note.length; index++) {
      if (note[index].Note !== null) {
        note[index].Note = note[index].Note.replace(/(\r\n|\n|\r)/gm, '<br>');
      }
    }
    return note;
  }
}