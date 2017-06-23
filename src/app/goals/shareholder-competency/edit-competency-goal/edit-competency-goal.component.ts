import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { CompetencyGoalService } from '../service/competency-goal.service';

import { Goal, Action, Measurement, Support, Note } from '../../goal';
@Component({
  selector: 'app-edit-competency-goal',
  templateUrl: './edit-competency-goal.component.html',
  styleUrls: ['./edit-competency-goal.component.scss']
})
export class EditCompetencyGoalComponent implements OnInit, AfterViewInit {
  @ViewChild('editModal') editModal: ModalDirective;
  @Input('competencyGoal') competencyGoal: Goal;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() updateSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  editCompetencyGoalForm: FormGroup;
  goalCompetencies: string[];
  goalCompetencyTypes: string[];
  weightList: number[];

  constructor(private fb: FormBuilder, private cgService: CompetencyGoalService) { }

  ngOnInit() {
    this.weightList = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
    this.getGoalCompetencies();
    this.getCompetencyTypes();
    this.editCompetencyGoalForm = this.toFormGroup(this.competencyGoal);
    this.replaceBreakTags();
  }

  ngAfterViewInit() {
    this.showModal();
  }

  getGoalCompetencies() {
    this.cgService.getCompetencies()
      .subscribe(data => {
        this.goalCompetencies = data;
      }, error => {
        console.log(error);
      });
  }

  getCompetencyTypes() {
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
      GoalCompetencyId: [data.GoalCompetencyId, Validators.required],
      GoalCompetencyTypeId: [data.GoalCompetencyTypeId, Validators.required],
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
    if (this.competencyGoal.GoalDescription !== null) {
      this.editCompetencyGoalForm.patchValue({
        GoalDescription: this.competencyGoal.GoalDescription.split('<br>').join('\n')
      });
    }
    return false;
  }

  showModal() {
    this.editModal.show();
  }

   closeModal() {
    if (this.editCompetencyGoalForm.dirty) {
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

  updateGoal(goal: Goal) {
    this.cgService.updateCompetencyGoal(goal)
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
