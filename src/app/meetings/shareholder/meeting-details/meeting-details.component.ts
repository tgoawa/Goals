import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Detail } from '../models/shmeeting';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.scss']
})
export class MeetingDetailsComponent implements OnInit {
  @Input('parentMeetingForm') parentMeetingForm: FormGroup;
  @Input('detailType') detailType: number;
  @Input('Details') Details: Detail;
  constructor() { }

  ngOnInit() {
  }


}
