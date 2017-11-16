import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { MeetingsService } from '../services/meetings.service';
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
  @ViewChild('addMeeting') addMeeting;
  @Input('previousMeeting') previousMeeting: Meeting;
  @Input('currentMeeting') currentMeeting: Meeting;
  @Input('teamMember') teamMember: TeamMember;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() addSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  priorityOneIsCollapsed = true;
  priorityTwoIsCollapsed = true;
  priorityThreeIsCollapsed = true;

  constructor(private msService: MeetingsService) { }

  ngOnInit() {
    this.isChargeable();
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

  closeModal() {
    if (this.addMeeting.touched) {
      if (confirm('You are about to lose changes, are you sure?')) {
        this.hideModal();
      }
      return false;
    } else {
      this.hideModal();
    }
  }

  hideModal() {
    this.addModal.hide();
    this.modalIsClosed();
  }

  modalIsClosed() {
    this.modalClosed.emit(true);
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

  carryOverPreviousChargeables() {
    if (this.previousMeeting != null) {
      for (let index = 20; index < 26; index++) {
        this.currentMeeting.Questions[index].AnswerText = this.previousMeeting.Questions[index].AnswerText;
      }
    }
  }

  setDefaultChargeableValues() {
      for (let index = 20; index < 26; index++) {
        this.currentMeeting.Questions[index].AnswerText = 0;
      }
  }

  isChargeable() {
    if (this.teamMember.IsChargable) {
      this.setDefaultChargeableValues();
      this.carryOverPreviousChargeables();
    }
  }
}
