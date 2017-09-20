import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';

import { TeamMember, TeamMemberService } from '../../../teamMember';
import { PersonalGoalService } from '../service/personal-goal.service';

import { Goal, Action, Measurement, Support, Note } from '../../goal';
@Component({
  selector: 'app-edit-personal-goal',
  templateUrl: './edit-personal-goal.component.html',
  styleUrls: ['./edit-personal-goal.component.scss']
})
export class EditPersonalGoalComponent implements OnInit, AfterViewInit {
  @ViewChild('editModal') editModal: ModalDirective;
  @Input('personalGoal') personalGoal: Goal;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() updateSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  teamMember: TeamMember;
  editPersonalGoalForm: FormGroup;
  goalCompetencies: string[];
  goalCompetencyTypes: string[];
  weightList: number[];

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
  };

  constructor(private fb: FormBuilder, private cgService: PersonalGoalService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    this.weightList = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    this.getGoalCompetencies();
    this.getCompetencyTypes();
    this.clearCompetencyId();
    this.clearCompetencyTypeId();
    this.editPersonalGoalForm = this.toFormGroup(this.personalGoal);
    this.replaceBreakTags();
  }

  ngAfterViewInit() {
    this.showModal();
  }

  getGoalCompetencies() {
    this.cgService.getCompetencies()
      .subscribe(data => {
        this.goalCompetencies = data;
        this.checkPreviousGoalCompetency();
      }, error => {
        console.log(error);
      });
  }

  checkPreviousGoalCompetency() {
    if (this.personalGoal.GoalTypeId === 3) {
      this.goalCompetencies.pop();
    }
  }

  getCompetencyTypes() {
    this.cgService.getCompetencyTypes()
      .subscribe(data => {
        this.goalCompetencyTypes = data;
      }, error => {
        console.log(error);
      });
  }

  clearCompetencyId() {
    if (this.personalGoal.GoalCompetencyId === 0) {
      this.personalGoal.GoalCompetencyId = null;
    }
  }

  clearCompetencyTypeId() {
    if (this.personalGoal.GoalCompetencyTypeId === 0) {
      this.personalGoal.GoalCompetencyTypeId = null;
    }
  }

  private toFormGroup(data: Goal): FormGroup {
    const formGroup = this.fb.group({
      GoalId: data.GoalId,
      GoalTypeId: data.GoalTypeId,
      GoalWIGId: data.GoalWIGId,
      Weight: [data.Weight, Validators.required],
      GoalCompetencyId: [data.GoalCompetencyId, Validators.required],
      GoalCompetencyTypeId: [data.GoalCompetencyTypeId, Validators.required],
      GoalCompletionPercentage: data.GoalCompletionPercentage,
      IndustryTeamId: data.IndustryTeamId,
      IsCompleted: data.IsCompleted,
      TeamMemberId: data.TeamMemberId,
      DisplayDateCreated: data.DisplayDateCreated,
      DisplayDateModified: data.DisplayDateModified,
      DisplayDateCompleted: [{formatted: data.DisplayDateCompleted}, Validators.required],
      Name: [data.Name, Validators.required],
      GoalDescription: [data.GoalDescription, Validators.required],
    });

    return formGroup;
  }

  replaceBreakTags() {
    if (this.personalGoal.GoalDescription !== null) {
      this.editPersonalGoalForm.patchValue({
        GoalDescription: this.personalGoal.GoalDescription.split('<br>').join('\n')
      });
    }
    return false;
  }

  showModal() {
    this.editModal.show();
  }

  closeModal() {
    if (this.editPersonalGoalForm.touched) {
      if (confirm('You are about to lose changes, are you sure?')) {
        this.hideModal();
      }
      return false;
    } else {
      this.hideModal();
    }
  }

  hideModal() {
    this.editPersonalGoalForm.reset();
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
    this.cgService.updateCompetencyGoal(this.editPersonalGoalForm.value)
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
        this.editPersonalGoalForm.value.IsCompleted = true;
      } else {
        this.editPersonalGoalForm.value.IsCompleted = false;
      }
    }
    this.formatDateCompleteBy();
    this.formatActionDueDate();
    this.replaceLineBreaks(this.editPersonalGoalForm.value);
    this.updateGoal();
  }

  checkActionItems() {
    for (let index = 0; index < this.editPersonalGoalForm.value.Actions.length; index++) {
      if (!this.editPersonalGoalForm.value.Actions[index].IsCompleted) {
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
    const personalGoal = this.editPersonalGoalForm.value;
    if (personalGoal.DisplayDateDue !== null) {
      personalGoal.DisplayDateCompleted = personalGoal.DisplayDateCompleted.formatted;
    }
  }

  formatActionDueDate() {
    const editedGoal: Goal = this.editPersonalGoalForm.value;
    for (let index = 0; index < editedGoal.Actions.length; index++) {
      if (editedGoal.Actions[index].DisplayDateDue !== null) {
        editedGoal.Actions[index].DisplayDateDue = editedGoal.Actions[index].DisplayDateDue.formatted;
      }
    }
  }
}
