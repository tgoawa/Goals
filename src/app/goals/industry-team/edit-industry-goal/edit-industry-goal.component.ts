import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';

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

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
  };

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
      DisplayDateCompleted: [{formatted: data.DisplayDateCompleted}, Validators.required],
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

  closeModal() {
    if (this.editIndustryGoalForm.dirty) {
      if (confirm('You are about to lose changes, are you sure?')) {
        this.hideModal();
      }
      return false;
    } else {
      this.hideModal();
    }
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

  updateGoal() {
    this.igService.updateIndustryGoal(this.editIndustryGoalForm.value)
      .subscribe(data => {
        this.goalUpdateSuccess();
        this.hideModal();
      }, error => {
        console.log(error);
        this.hideModal();
      });
  }

  onSubmit() {
    if (this.checkActionItems()) {
      if (confirm('All actions are completed. Complete goal?')) {
        this.editIndustryGoalForm.value.IsCompleted = true;
      } else {
        this.editIndustryGoalForm.value.IsCompleted = false;
      }
    }
    this.formatDateCompleteBy();
    this.formatIndustryTeamId(this.editIndustryGoalForm.value);
    this.replaceLineBreaks(this.editIndustryGoalForm.value);
    this.updateGoal();
  }

  checkActionItems() {
    for (let index = 0; index < this.editIndustryGoalForm.value.Actions.length; index++) {
      if (!this.editIndustryGoalForm.value.Actions[index].IsCompleted) {
        return false;
      }
    }
    return true;
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

  formatDateCompleteBy() {
    const personalGoal = this.editIndustryGoalForm.value;
    if (personalGoal.DisplayDateDue !== null) {
      personalGoal.DisplayDateCompleted = personalGoal.DisplayDateCompleted.formatted;
    }
  }

  formatIndustryTeamId(formValue: Goal) {
    formValue.IndustryTeamId = +formValue.IndustryTeamId;
  }
}
