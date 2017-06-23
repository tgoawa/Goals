import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { MeetingsService } from '../services/meetings.service';
import { CoachService } from '../services/coach.service';
import { Meeting } from '../model/meeting.model';
import { Question } from '../model/question.model';
import { TeamMember } from '../../../teamMember';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.scss']
})
export class AddMeetingComponent implements OnInit, AfterViewInit {
  @ViewChild('addModal') addModal: ModalDirective;
  @Input('previousMeeting') previousMeeting: Meeting;
  @Input('currentMeeting') currentMeeting: Meeting;
  @Input('teamMember') teamMember: TeamMember;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() addSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  coachList: TeamMember[];
  selectedCoach: string;
  priorityOneIsCollapsed = true;
  priorityTwoIsCollapsed = true;
  priorityThreeIsCollapsed = true;

  constructor(private csService: CoachService, private msService: MeetingsService) { }

  ngOnInit() {
    this.getCoaches();
  }

  ngAfterViewInit() {
    this.showModal();
  }

  onSubmit() {
    this.saveMeeting();
  }

  showModal() {
    this.addModal.show();
  }

  hideModal() {
    this.addModal.hide();
    this.modalIsClosed();
  }

  modalIsClosed() {
    this.modalClosed.emit(true);
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
      if (this.selectedCoach === this.coachList[index].LastFirstName) {
        this.currentMeeting.CoachId = this.coachList[index].TeamMemberId;
      }
    }
  }

  saveMeeting() {
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
    this.addSuccess.emit(true);
  }

  setIsDirty(question: Question) {
    question.IsDirty = true;
  }

}
