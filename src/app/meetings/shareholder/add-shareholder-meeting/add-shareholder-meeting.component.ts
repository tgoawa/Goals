import { Component, OnInit, AfterViewInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ShareholderMeetingService } from '../service/shareholder-meeting.service';
import { SHMeeting } from '../models/shmeeting';

@Component({
  selector: 'app-add-shareholder-meeting',
  templateUrl: './add-shareholder-meeting.component.html',
  styleUrls: ['./add-shareholder-meeting.component.scss']
})
export class AddShareholderMeetingComponent implements OnInit, AfterViewInit {
  @ViewChild('addModal') addModal: ModalDirective;
  @Input('meeting') meeting: SHMeeting;
  @Output() modalClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() addSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  addShareholderMeetingForm: FormGroup;
  weightList = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
  constructor(private fb: FormBuilder, private shService: ShareholderMeetingService) { }

  ngOnInit() {
    this.addShareholderMeetingForm = this.toFormGroup(this.meeting);
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

  onSubmit() {
    // this.saveMeeting();
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

  saveMeeting() {
    this.shService.saveMeeting(this.meeting)
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

}
