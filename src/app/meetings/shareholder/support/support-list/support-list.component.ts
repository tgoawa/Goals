import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Support } from '../../models/shmeeting';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.scss']
})
export class SupportListComponent implements OnInit {
  @Input('parentMeetingForm') parentMeetingForm: FormGroup;
  @Input('Supports') Supports: Support[];
  @Input('meetingId') meetingId: number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  
  addSupport() {
    const support: Support = {
      ShareHolderMeetingSupportId: 0,
      ShareHolderMeetingId: this.meetingId,
      Support: '',
      DisplayDateCreated: '',
      DisplayDateModified: '',
      DisplayDateDue: ''
    };

    this.Supports.push(support);
    this.cd.detectChanges();
    return false;
  }

  removeSupport(index: number) {
    if (this.Supports.length > 1) {
      this.Supports.splice(index, 1);
      (<FormArray>this.parentMeetingForm.get('Supports')).removeAt(index);
    }
    return false;
  }
}
