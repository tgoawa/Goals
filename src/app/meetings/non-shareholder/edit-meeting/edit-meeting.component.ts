import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms/';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { MeetingsService } from '../services/meetings.service';
import { Meeting } from '../model/meeting.model';
import { Question } from '../model/question.model';
import { TeamMember } from '../../../teamMember';


@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.scss']
})
export class EditMeetingComponent implements OnInit, AfterViewInit {
  @ViewChild('editModal') editModal: ModalDirective;
  @Input('previousMeeting') previousMeeting: Meeting;
  @Input('currentMeeting') currentMeeting: Meeting;
  @Input('teamMember') teamMember: TeamMember;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() updateSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  priorityOneIsCollapsed = true;
  priorityTwoIsCollapsed = true;
  priorityThreeIsCollapsed = true;

  constructor(private msService: MeetingsService) { }

  ngOnInit() {
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

  closeModal(form: NgForm) {
    if (form.dirty) {
      if (confirm('You are about to lose changes, are you sure?')) {
        this.hideModal();
      }
      return false;
    } else {
      this.hideModal();
    }
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
    this.updateSuccess.emit(true);
  }

  setIsDirty(question: Question) {
    question.IsDirty = true;
  }
}
