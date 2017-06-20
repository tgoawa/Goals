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

  coachList: TeamMember[];
  selectedCoach: TeamMember;

  constructor(private csService: CoachService) { }

  ngOnInit() {
    this.getCoaches();
    this.replaceLineBreaks();
  }

  ngAfterViewInit() {
    this.showModal();
  }

  onSubmit(formValue) {

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

}
