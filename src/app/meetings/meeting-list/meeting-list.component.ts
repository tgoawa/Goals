import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meeting } from 'app/meetings/non-shareholder/model/meeting.model';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {
  @Input('meeting') meeting: Meeting;
  @Input('index') index: number;
  @Output() meetingToEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() meetingToView: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onEdit(meeting: any) {
    this.meetingToEdit.emit(meeting);
  }

  onViewOldMeeting(meeting: any) {
    this.meetingToView.emit(meeting);
  }

}
