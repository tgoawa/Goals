import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Support } from '../../goal';

@Component({
  selector: 'app-support-item',
  templateUrl: './support-item.component.html',
  styleUrls: ['./support-item.component.scss']
})
export class SupportItemComponent implements OnInit {
  @Input('supportItems') supportItems: FormArray;
  @Input('supportItem') supportItem: Support;

  supportItemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.supportItemForm = this.toFormGroup(this.supportItem);
    this.replaceBreakTags();
    this.supportItems.push(this.supportItemForm);
  }

  private toFormGroup(data: Support) {
    const formGroup = this.fb.group({
      SupportId: data.SupportId,
      GoalId: data.GoalId,
      Support: [data.Support, Validators.required],
      IsDirty: data.IsDirty
    });

    return formGroup;
  }

  replaceBreakTags() {
    if (this.supportItem.Support !== null) {
      this.supportItemForm.patchValue({
        Support: this.supportItem.Support.split('<br>').join('\n')
      });
    }
  }

  onValueChange() {
    this.supportItemForm.patchValue({
      IsDirty: true
    });
  }
}
