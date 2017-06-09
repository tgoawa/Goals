import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Action } from '../../goal';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.scss']
})
export class ActionsListComponent implements OnInit {
  @Input('parentGoalForm') parentGoalForm: FormGroup;
  @Input('actions') Actions: Action[];
  @Input('goalId') goalId: number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.parentGoalForm.addControl('Actions', new FormArray([]));
  }

  addAction() {
    const action: Action = {
      ActionId: 0,
      GoalId: this.goalId,
      Action: '',
      IsCompleted: false,
      DisplayDateCreated: '',
      DisplayDateModified: ''
    };

    this.Actions.push(action);
    this.cd.detectChanges();
    return false;
  }

  removeAction(index: number) {
    if (this.Actions.length > 1) {
      this.Actions.splice(index, 1);
      (<FormArray>this.parentGoalForm.get('Actions')).removeAt(index);
    }
    return false;
  }
}
