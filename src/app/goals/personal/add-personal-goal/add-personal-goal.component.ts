import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';

import { PersonalGoalService } from '../service/personal-goal.service';
import { TeamMember, TeamMemberService } from '../../../teamMember';

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
  @Output() addSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  teamMember: TeamMember;
  addpersonalGoalForm: FormGroup;
  goalCompetencies: string[];
  goalCompetencyTypes: string[];
  weightList: number[];

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
  };

  constructor(private fb: FormBuilder, private cgService: PersonalGoalService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.getEmulatedTeamMember();
    this.weightList = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    this.getGoalCompetencies();
    this.getpersonalTypes();
    this.addpersonalGoalForm = this.toFormGroup(this.personalGoal);
  }

  ngAfterViewInit() {
    this.showModal();
  }

  getEmulatedTeamMember() {
    this.tmService.emulatedTeamMember
      .subscribe(data => {
        this.teamMember = data;
      }, error => {
        console.log(error);
      });
  }

  getGoalCompetencies() {
    this.cgService.getCompetencies()
      .subscribe(data => {
        this.goalCompetencies = data;
        this.removePrevGoalEntry();
      }, error => {
        console.log(error);
      });
  }

  removePrevGoalEntry() {
    this.goalCompetencies.pop();
  }

  getpersonalTypes() {
    this.cgService.getCompetencyTypes()
      .subscribe(data => {
        this.goalCompetencyTypes = data;
      }, error => {
        console.log(error);
      });
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
      DisplayDateCompleted: ['', Validators.required],
      Name: [data.Name, Validators.required],
      GoalDescription: [data.GoalDescription, Validators.required],
    });

    return formGroup;
  }

  showModal() {
    this.addModal.show();
  }

  closeModal() {
    if (this.addpersonalGoalForm.touched) {
      if (confirm('You are about to lose changes, are you sure?')) {
        this.hideModal();
      }
      return false;
    } else {
      this.hideModal();
    }
  }

  hideModal() {
    this.addpersonalGoalForm.reset();
    this.addModal.hide();
    this.modalIsClosed();
  }

  modalIsClosed() {
    this.modalClosed.emit(true);
  }

  goalAddSuccess() {
    this.addSuccess.emit(true);
  }

  saveGoal(goal: Goal) {
    this.cgService.saveCompetencyGoal(goal)
      .subscribe(data => {
        this.goalAddSuccess();
        this.hideModal();
      }, error => {
        console.log(error);
      });
  }

  onSubmit(formValue: Goal) {
    this.replaceLineBreaks(formValue);
    this.formatDateCompleteBy();
    this.formatActionDueDate();
    this.saveGoal(formValue);
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
    const personalGoal = this.addpersonalGoalForm.value;
    if (personalGoal.DisplayDateDue !== null) {
      personalGoal.DisplayDateCompleted = personalGoal.DisplayDateCompleted.formatted;
    }
  }

  formatActionDueDate() {
    const editedGoal: Goal = this.addpersonalGoalForm.value;
    for (let index = 0; index < editedGoal.Actions.length; index++) {
      if (editedGoal.Actions[index].DisplayDateDue !== null) {
        editedGoal.Actions[index].DisplayDateDue = editedGoal.Actions[index].DisplayDateDue.formatted;
      }
    }
  }
}
