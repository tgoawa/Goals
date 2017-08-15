import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ShareholderMeetingService } from '../service/shareholder-meeting.service';
import { CoachService } from '../../non-shareholder/services/coach.service';
import { SHMeeting } from '../models/shmeeting';
import { TeamMember } from '../../../teamMember';

@Component({
  selector: 'app-add-shareholder-meeting',
  templateUrl: './add-shareholder-meeting.component.html',
  styleUrls: ['./add-shareholder-meeting.component.scss']
})
export class AddShareholderMeetingComponent implements OnInit, AfterViewInit {
  @ViewChild('addModal') addModal: ModalDirective;
  @Input('previousMeeting') previousMeeting: SHMeeting;
  @Input('meeting') meeting: SHMeeting;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() addSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  coachList: TeamMember[];
  addShareholderMeetingForm: FormGroup;
  weightList = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
  constructor(private fb: FormBuilder, private shService: ShareholderMeetingService, private csService: CoachService) { }

  ngOnInit() {
    this.getShareholderCoaches();
    this.addShareholderMeetingForm = this.toFormGroup(this.meeting);
    this.carryOverPreviousCoach();
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
      ShareHolderMeetingId: 0,
      CoachId: data.CoachId,
      TeamMemberId: data.TeamMemberId,
      Weight: [data.Weight, Validators.required],
      ShareHolderCoach: null
    });

    return formGroup;
  }

  onSubmit() {
    this.mapCoachIdToMeeting();
    this.formatNotesDueDate();
    this.formatSupportDueDate();
    this.saveMeeting();
  }

  showModal() {
    this.addModal.show();
  }

  carryOverPreviousCoach() {
    if (this.previousMeeting !== undefined) {
      this.addShareholderMeetingForm.patchValue({
        ShareHolderCoach: this.previousMeeting.ShareHolderCoach.LastFirstName
      });
    }
  }

  closeModal() {
    if (this.addShareholderMeetingForm.dirty) {
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
    this.shService.saveMeeting(this.addShareholderMeetingForm.value)
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
  mapCoachIdToMeeting() {
    const currentMeeting = this.addShareholderMeetingForm.value;
    for (let index = 0; index < this.coachList.length; index++) {
      if (currentMeeting.ShareHolderCoach === this.coachList[index].LastFirstName) {
        currentMeeting.CoachId = this.coachList[index].TeamMemberId;
        currentMeeting.ShareHolderCoach = this.coachList[index];
      }
    }
  }

  formatSupportDueDate() {
    const editedMeeting: SHMeeting = this.addShareholderMeetingForm.value;
    for (let index = 0; index < editedMeeting.Supports.length; index++) {
      if (editedMeeting.Supports[index].DisplayDateDue !== null) {
        editedMeeting.Supports[index].DisplayDateDue = editedMeeting.Supports[index].DisplayDateDue.formatted;
      }
    }
  }

  formatNotesDueDate() {
    const editedMeeting: SHMeeting = this.addShareholderMeetingForm.value;
    for (let index = 0; index < editedMeeting.Notes.length; index++) {
      if (editedMeeting.Notes[index].DisplayDateDue !== null) {
        editedMeeting.Notes[index].DisplayDateDue = editedMeeting.Notes[index].DisplayDateDue.formatted;
      }
    }
  }

}
