import { Component, OnInit, ViewChild, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Meeting } from '../model/meeting.model';
import { TeamMember } from 'app/teamMember';

import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-read-only-meeting',
  templateUrl: './read-only-meeting.component.html',
  styleUrls: ['./read-only-meeting.component.scss']
})
export class ReadOnlyMeetingComponent implements OnInit, AfterViewInit {
  @ViewChild('readOnlyModal') readOnlyModal: ModalDirective;
  @Input('meeting') meeting: Meeting;
  @Input('teamMember') teamMember: TeamMember;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.showModal();
  }

  hideModal() {
    this.readOnlyModal.hide();
    this.modalIsClosed();
  }

  showModal() {
    this.readOnlyModal.show();
  }

  modalIsClosed() {
    this.modalClosed.emit(true);
  }
}
