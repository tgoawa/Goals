import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SHMeeting } from '../models/shmeeting';
import { ShareholderMeetingService } from '../service/shareholder-meeting.service';



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

  editShareholderMeetingForm: FormGroup;
  weightList = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
  constructor(private fb: FormBuilder, private shmService: ShareholderMeetingService) { }

  ngOnInit() {
    this.editShareholderMeetingForm = this.toFormGroup(this.meeting);
  }

  ngAfterViewInit() {
    this.showModal();
  }

  private toFormGroup(data: SHMeeting): FormGroup {
    const formGroup = this.fb.group({
      CoachId: data.CoachId,
      TeamMemberId: data.TeamMemberId,
      Weight: data.Weight,
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
    this.updateMeeting();
  }

  formatSupportDueDate() {
    const editedMeeting: SHMeeting = this.editShareholderMeetingForm.value;
    for (let index = 0; index < editedMeeting.Supports.length; index ++) {
      if (editedMeeting.Supports[index].DisplayDateDue !== null) {
        this.meeting.Supports[index].DisplayDateDue = editedMeeting.Supports[index].DisplayDateDue.formatted;
      }
    }
  }

    formatNotesDueDate() {
    const editedMeeting: SHMeeting = this.editShareholderMeetingForm.value;
    for (let index = 0; index < editedMeeting.Notes.length; index ++) {
      if (editedMeeting.Notes[index].DisplayDateDue !== null) {
        this.meeting.Notes[index].DisplayDateDue = editedMeeting.Notes[index].DisplayDateDue.formatted;
      }
    }
  }

  updateMeeting() {
    this.shmService.saveMeeting(this.meeting)
    .subscribe(data => {
      this.meetingUpdateSuccess();
      this.hideModal();
    }, error => {
      console.log(error);
      this.hideModal();
    })
  }

}
