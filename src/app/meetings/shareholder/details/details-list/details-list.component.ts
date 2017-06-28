import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Detail } from '../../models/shmeeting';

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.scss']
})
export class DetailsListComponent implements OnInit {
  @Input('parentMeetingForm') parentMeetingForm: FormGroup;
  @Input('Details') Details: Detail[];
  @Input('meetingId') meetingId: number;
  
  constructor() { }

  ngOnInit() {
    this.parentMeetingForm.addControl('Details', new FormArray([]));
  }

}
