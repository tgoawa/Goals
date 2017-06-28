import { Component, OnInit, ViewChild, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

import { SHMeeting } from '../../models/shmeeting';
import { TeamMember } from '../../../../teamMember/';

import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-read-only-shareholder-meeting',
  templateUrl: './read-only-shareholder-meeting.component.html',
  styleUrls: ['./read-only-shareholder-meeting.component.scss']
})
export class ReadOnlyShareholderMeetingComponent implements OnInit, AfterViewInit {
  @ViewChild('readOnlyModal') readOnlyModal: ModalDirective;
  @Input('meeting') meeting: SHMeeting;
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
