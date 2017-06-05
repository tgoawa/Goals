import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActionItem } from './../goal';

@Component({
  selector: 'app-action-items',
  templateUrl: './action-items.component.html',
  styleUrls: ['./action-items.component.scss']
})
export class ActionItemsComponent implements OnInit {
  @Input('actionItems') actionItems: FormArray;
  @Input('action') action: ActionItem;

  actionItemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.actionItemForm = this.toFormGroup(this.action);
    this.actionItems.push(this.actionItemForm);
  }

  private toFormGroup(data: ActionItem) {
    const formGroup = this.fb.group({
      ActionId: data.ActionId,
      GoalId: data.GoalId,
      Action: [data.Action, Validators.required],
      IsCompleted: data.IsCompleted
    });

    return formGroup;
  }
}
