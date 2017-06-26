import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ShareholderMeetingService } from '../service/shareholder-meeting.service';
import { TeamMember, TeamMemberService } from '../../../teamMember/';
import { SHMeeting } from '../models/shmeeting';

@Component({
  selector: 'app-sh-meetings-list',
  templateUrl: './sh-meetings-list.component.html',
  styleUrls: ['./sh-meetings-list.component.scss']
})
export class ShMeetingsListComponent implements OnInit {

  meetingList: SHMeeting[];
  newMeeting: SHMeeting;
  meetingToEdit: SHMeeting;
  readMeeting: SHMeeting;
  isLoading = false;

  teamMember: TeamMember;

  constructor(private shmService: ShareholderMeetingService,
    private tmService: TeamMemberService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    this.getMeetings();
  }

  getMeetings() {
    this.isLoading = true;
    this.shmService.getMeetings(this.teamMember.TeamMemberId)
      .subscribe(data => {
        console.log(data);
        this.isLoading = false;
        this.meetingList = data;
      }, error => {
        console.log(error);
        this.isLoading = false;
      });
  }

  onEdit(meeting: SHMeeting) {
    this.meetingToEdit = meeting;
    console.log(this.meetingToEdit);
  }

  onRead(meeting: SHMeeting) {
    this.readMeeting = meeting;
  }

    clearMeetingToEdit() {
    this.meetingToEdit = undefined;
  }

  clearNewMeeting() {
    this.newMeeting = undefined;
  }

  clearReadMeeting() {
    this.readMeeting = undefined;
  }

  refreshListOnEdit() {
    this.showSuccessUpdate();
    this.getMeetings();
  }

  refreshListOnAdd() {
    this.showSuccessAdd();
    this.getMeetings();
  }

  onAdd() {
    this.newMeeting = new SHMeeting;
    this.newMeeting.CoachId = 0;
    this.newMeeting.TeamMemberId = this.teamMember.TeamMemberId;
  }

  showSuccessUpdate() {
    this.toastrService.success('', 'Meeting was updated successfully!');
  }

  showSuccessAdd() {
    this.toastrService.success('', 'New Meeting was added!');
  }
}
