import { Component, OnInit, Input } from '@angular/core';
import { Meeting } from 'app/meetings/non-shareholder/model/meeting.model';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {
  @Input('meeting') meeting: Meeting;
  constructor() { }

  ngOnInit() {
  }

}
