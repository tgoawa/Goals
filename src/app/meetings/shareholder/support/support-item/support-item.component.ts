import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { CalendarModule } from 'primeng/primeng';

import { Support } from '../../models/shmeeting';

@Component({
  selector: 'app-support-item',
  templateUrl: './support-item.component.html',
  styleUrls: ['./support-item.component.scss']
})
export class SupportItemComponent implements OnInit {
  @Input('supportItems') supportItems: FormArray;
  @Input('supportItem') supportItem: Support;

  supportItemForm: FormGroup;

  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.supportItemForm = this.toFormGroup(this.supportItem);
    this.replaceBreakTags();
    this.supportItems.push(this.supportItemForm);
  }

  private toFormGroup(data: Support) {
    const formGroup = this.fb.group({
      ShareHolderMeetingSupportId: data.ShareHolderMeetingSupportId,
      ShareHolderMeetingId: data.ShareHolderMeetingId,
      Support: data.Support,
      DisplayDateCreated: data.DisplayDateCreated,
      DisplayDateModified: data.DisplayDateModified,
      DisplayDateDue: {formatted: data.DisplayDateDue}
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

}
