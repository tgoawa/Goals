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
  @Input('actions') actions: Action[];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.parentGoalForm.addControl('actions', new FormArray([]));
  }

}
