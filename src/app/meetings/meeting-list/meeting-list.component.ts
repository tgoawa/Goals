import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meeting } from 'app/meetings/non-shareholder/model/meeting.model';
import { TeamMember } from 'app/teamMember';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {
  @Input('meeting') meeting: Meeting;
  @Input('index') index: number;
  @Input('coachName') coachName: string;
  @Output() meetingToEdit: EventEmitter<Meeting> = new EventEmitter<Meeting>();
  @Output() meetingToView: EventEmitter<Meeting> = new EventEmitter<Meeting>();
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
