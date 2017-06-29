import { Component, OnInit, Input } from '@angular/core';

import { SHMeeting } from '../../../meetings/shareholder/models/shmeeting';

@Component({
  selector: 'app-shareholder-meeting',
  templateUrl: './shareholder-meeting.component.html',
  styleUrls: ['./shareholder-meeting.component.scss']
})
export class ShareholderMeetingComponent implements OnInit {
  @Input('meeting') meeting: SHMeeting;
  constructor() { }

  ngOnInit() {
  }

}
