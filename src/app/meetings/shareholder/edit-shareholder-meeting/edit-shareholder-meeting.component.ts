import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { SHMeeting } from '../models/shmeeting';
import { TeamMember } from '../../../teamMember/'
import { ShareholderMeetingService } from '../service/shareholder-meeting.service';
import { CoachService } from '../../non-shareholder/services/coach.service';



@Component({
  selector: 'app-edit-shareholder-meeting',
  templateUrl: './edit-shareholder-meeting.component.html',
  styleUrls: ['./edit-shareholder-meeting.component.scss']
})
export class EditShareholderMeetingComponent implements OnInit, AfterViewInit {
  @ViewChild('editModal') editModal: ModalDirective;
  @Input('meeting') meeting: SHMeeting;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() updateSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  coachList: TeamMember[];
  editShareholderMeetingForm: FormGroup;
  weightList = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
  constructor(private fb: FormBuilder, private shmService: ShareholderMeetingService, private csService: CoachService) { }

  ngOnInit() {
    this.getShareholderCoaches();
    this.editShareholderMeetingForm = this.toFormGroup(this.meeting);
  }

  ngAfterViewInit() {
    this.showModal();
  }

  getShareholderCoaches() {
    this.csService.getShareholderCoaches()
    .subscribe(data => {
      this.coachList = data;
    }, error => {
      console.log(error);
    });
  }

  private toFormGroup(data: SHMeeting): FormGroup {
    const formGroup = this.fb.group({
      ShareHolderMeetingId: data.ShareHolderMeetingId,
      CoachId: data.CoachId,
      TeamMemberId: data.TeamMemberId,
      Weight: [data.Weight, Validators.required],
      ShareHolderCoach: data.ShareHolderCoach.LastFirstName
    });

    return formGroup;
  }

    showModal() {
    this.editModal.show();
  }

  closeModal() {
    if (this.editShareholderMeetingForm.dirty) {
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

  meetingUpdateSuccess() {
    this.updateSuccess.emit(true);
  }

  onSubmit() {
    this.formatSupportDueDate();
    this.formatNotesDueDate();
    this.mapCoachIdToMeeting();
    this.updateMeeting();
  }

  mapCoachIdToMeeting() {
    const currentMeeting = this.editShareholderMeetingForm.value;
    for (let index = 0; index < this.coachList.length; index++) {
      if ( currentMeeting.ShareHolderCoach === this.coachList[index].LastFirstName) {
        currentMeeting.CoachId = this.coachList[index].TeamMemberId;
        currentMeeting.ShareHolderCoach = this.coachList[index];
      }
    }
  }

  formatSupportDueDate() {
    const editedMeeting: SHMeeting = this.editShareholderMeetingForm.value;
    for (let index = 0; index < editedMeeting.Supports.length; index ++) {
      if (editedMeeting.Supports[index].DisplayDateDue !== null) {
        editedMeeting.Supports[index].DisplayDateDue = editedMeeting.Supports[index].DisplayDateDue.formatted;
      }
    }
  }

    formatNotesDueDate() {
    const editedMeeting: SHMeeting = this.editShareholderMeetingForm.value;
    for (let index = 0; index < editedMeeting.Notes.length; index ++) {
      if (editedMeeting.Notes[index].DisplayDateDue !== null) {
        editedMeeting.Notes[index].DisplayDateDue = editedMeeting.Notes[index].DisplayDateDue.formatted;
      }
    }
  }

  updateMeeting() {
    this.shmService.saveMeeting(this.editShareholderMeetingForm.value)
    .subscribe(data => {
      this.meetingUpdateSuccess();
      this.hideModal();
    }, error => {
      console.log(error);
      this.hideModal();
    });
  }

}
