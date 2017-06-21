import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { MeetingsService } from '../services/meetings.service';
import { CoachService } from '../../services/coach.service';
import { Meeting } from '../model/meeting.model';
import { TeamMember } from '../../../teamMember';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.scss']
})
export class EditMeetingComponent implements OnInit, AfterViewInit {
  @ViewChild('editModal') editModal: ModalDirective;
  @Input('currentMeeting') currentMeeting: Meeting;
  @Input('teamMember') teamMember: TeamMember;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() updateSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  coachList: TeamMember[];

  constructor(private csService: CoachService, private msService: MeetingsService) { }

  ngOnInit() {
    this.getCoaches();
    this.replaceLineBreaks();
  }

  ngAfterViewInit() {
    this.showModal();
  }

  onSubmit() {
    this.saveMeeting();
  }

  showModal() {
    this.editModal.show();
  }

  hideModal() {
    this.editModal.hide();
    this.modalIsClosed();
  }

  modalIsClosed() {
    this.modalClosed.emit(true);
  }

  replaceLineBreaks() {
    for (let index = 0; index < this.currentMeeting.Questions.length; index ++ ) {
      if (this.currentMeeting.Questions[index].AnswerText !== null) {
        this.currentMeeting.Questions[index].AnswerText = this.currentMeeting.Questions[index].AnswerText.split('<br>').join('\n');
      }
    }
  }

  getCoaches() {
    this.csService.getCoaches()
    .subscribe(data => {
      this.coachList = data;
    }, error => {
      console.log(error);
      // TODO: Add error toast
    });
  }

  mapCoachIdToMeeting() {
    for (let index = 0; index < this.coachList.length; index ++) {
      if (this.currentMeeting.CoachLastFirstName === this.coachList[index].LastFirstName) {
        this.currentMeeting.CoachId = this.coachList[index].TeamMemberId;
      }
    }
  }

  saveMeeting() {
    console.log(this.currentMeeting);
    this.msService.saveMeeting(this.currentMeeting)
    .subscribe(data => {
      this.meetingUpdateSuccess();
      this.hideModal();
    }, error => {
      console.log(error);
      this.hideModal();
    });
  }

  meetingUpdateSuccess() {
    this.updateSuccess.emit(true);
  }

}
