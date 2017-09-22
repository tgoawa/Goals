import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';

import { WigGoalServiceService } from '../service/wig-goal-service.service';

import { Goal, Action, Measurement, Support, Note } from '../../goal';
@Component({
  selector: 'app-edit-wig-goal',
  templateUrl: './edit-wig-goal.component.html',
  styleUrls: ['./edit-wig-goal.component.scss']
})
export class EditWigGoalComponent implements OnInit, AfterViewInit {
  @ViewChild('editModal') editModal: ModalDirective;
  @Input('wigGoal') wigGoal: Goal;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() updateSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  editWigGoalForm: FormGroup;
  WIGList: string[];
  weightList: number[];

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
  };

  constructor(private fb: FormBuilder, private wgService: WigGoalServiceService) { }

  ngOnInit() {
    this.weightList = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    this.getWIGS();
    this.editWigGoalForm = this.toFormGroup(this.wigGoal);
    this.replaceBreakTags();
  }

  ngAfterViewInit() {
    this.showModal();
  }

  getWIGS() {
    this.wgService.getWIGs()
      .subscribe(data => {
        this.WIGList = data;
      }, error => {
        console.log(error);
      });
  }

  private toFormGroup(data: Goal): FormGroup {
    const formGroup = this.fb.group({
      GoalId: data.GoalId,
      GoalTypeId: data.GoalTypeId,
      GoalWIGId: [data.GoalWIGId, Validators.required],
      GoalCompetencyId: [data.GoalCompetencyId, Validators.required],
      GoalCompetencyTypeId: [data.GoalCompetencyTypeId, Validators.required],
      GoalCompletionPercentage: data.GoalCompletionPercentage,
      IndustryTeamId: data.IndustryTeamId,
      IsCompleted: data.IsCompleted,
      TeamMemberId: data.TeamMemberId,
      Weight: data.Weight,
      DisplayDateCreated: data.DisplayDateCreated,
      DisplayDateModified: data.DisplayDateModified,
      DisplayDateCompleted: [{ formatted: data.DisplayDateCompleted }, Validators.required],
      Name: [data.Name, Validators.required],
      GoalDescription: [data.GoalDescription, Validators.required],
    });

    return formGroup;
  }

  replaceBreakTags() {
    if (this.wigGoal.GoalDescription !== null) {
      this.editWigGoalForm.patchValue({
        GoalDescription: this.wigGoal.GoalDescription.split('<br>').join('\n')
      });
    }
    return false;
  }

  showModal() {
    this.editModal.show();
  }

  closeModal() {
    if (this.editWigGoalForm.touched) {
      if (confirm('You are about to lose changes, are you sure?')) {
        this.hideModal();
      }
      return false;
    } else {
      this.hideModal();
    }
  }

  hideModal() {
    this.editWigGoalForm.reset();
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
    this.wgService.updateWigGoal(this.editWigGoalForm.value)
      .subscribe(data => {
        this.goalUpdateSuccess();
        this.hideModal();
      }, error => {
        console.log(error);
        this.hideModal();
      });
  }

  onSubmit() {
    if (this.editWigGoalForm.value.IsCompleted === true && !this.checkActionItems()) {
      this.reOpenGoal();
    } else if (this.checkActionItems()) {
      this.completeGoal();
    }
    this.formatDateCompleteBy();
    this.formatActionDueDate();
    this.replaceLineBreaks(this.editWigGoalForm.value);
    this.updateGoal();
  }

  checkActionItems() {
    for (let index = 0; index < this.editWigGoalForm.value.Actions.length; index++) {
      if (!this.editWigGoalForm.value.Actions[index].IsCompleted) {
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
    const personalGoal = this.editWigGoalForm.value;
    if (personalGoal.DisplayDateDue !== null) {
      personalGoal.DisplayDateCompleted = personalGoal.DisplayDateCompleted.formatted;
    }
  }

  formatActionDueDate() {
    const editedGoal: Goal = this.editWigGoalForm.value;
    for (let index = 0; index < editedGoal.Actions.length; index++) {
      if (editedGoal.Actions[index].DisplayDateDue !== null) {
        editedGoal.Actions[index].DisplayDateDue = editedGoal.Actions[index].DisplayDateDue.formatted;
      }
    }
  }

  private reOpenGoal() {
    if (confirm('This goal was completed, do you wish to reopen?')) {
      this.editWigGoalForm.value.IsCompleted = false;
    } else {
      this.editWigGoalForm.value.IsCompleted = true;
    }
  }

  private completeGoal() {
    if (confirm('All actions are completed. Complete goal?')) {
      this.editWigGoalForm.value.IsCompleted = true;
    } else {
      this.editWigGoalForm.value.IsCompleted = false;
    }
  }
}
