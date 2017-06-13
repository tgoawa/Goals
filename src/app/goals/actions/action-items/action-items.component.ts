import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Action } from '../../goal';

@Component({
  selector: 'app-action-items',
  templateUrl: './action-items.component.html',
  styleUrls: ['./action-items.component.scss']
})
export class ActionItemsComponent implements OnInit {
  @Input('actionItems') actionItems: FormArray;
  @Input('actionItem') actionItem: Action;

  actionItemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.actionItemForm = this.toFormGroup(this.actionItem);
    this.replaceBreakTags();
    this.actionItems.push(this.actionItemForm);
  }

  private toFormGroup(data: Action) {
    const formGroup = this.fb.group({
      ActionId: data.ActionId,
      GoalId: data.GoalId,
      Action: [data.Action, Validators.required],
      IsCompleted: data.IsCompleted,
      IsDirty: data.IsDirty
    });

    return formGroup;
  }

  replaceBreakTags() {
    if (this.actionItem.Action !== null) {
      this.actionItemForm.patchValue({
        Action: this.actionItem.Action.split('<br>').join('\n')
      });
    }
  }

  onValueChange() {
    this.actionItemForm.patchValue({
      IsDirty: true
    });
  }

}
