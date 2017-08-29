import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { ShareholderMeetingService } from '../service/shareholder-meeting.service';
import { TeamMember, TeamMemberService } from '../../../teamMember/';
import { SHMeeting, Detail } from '../models/shmeeting';

import * as _ from 'lodash';
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
    this.teamMember = this.tmService.emulatedTeamMember;
    this.getMeetings();
  }

  getMeetings() {
    this.isLoading = true;
    this.shmService.getMeetings(this.teamMember.TeamMemberId)
      .subscribe(data => {
        this.isLoading = false;
        this.meetingList = data;
      }, error => {
        console.log(error);
        this.isLoading = false;
      });
  }

  onEdit(meeting: SHMeeting) {
    this.meetingToEdit = _.cloneDeep(meeting);

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
    this.newMeeting = new SHMeeting(this.teamMember.TeamMemberId);
    this.newMeeting.Details.push(new Detail(1));
    this.newMeeting.Details.push(new Detail(2));
    this.newMeeting.Details.push(new Detail(3));
  }

  showSuccessUpdate() {
    this.toastrService.success('', 'Meeting was updated successfully!');
  }

  showSuccessAdd() {
    this.toastrService.success('', 'New Meeting was added!');
  }
}
