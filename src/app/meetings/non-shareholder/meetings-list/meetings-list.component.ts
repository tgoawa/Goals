import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { QuestionService } from '../services/question.service';
import { MeetingsService } from '../services/meetings.service';
import { TeamMember, TeamMemberService } from '../../../teamMember';
import { Question } from '../model/question.model';
import { Meeting } from '../model/meeting.model';

import * as _ from 'lodash';

@Component({
  selector: 'app-meetings-list',
  templateUrl: './meetings-list.component.html',
  styleUrls: ['./meetings-list.component.scss']
})
export class MeetingsListComponent implements OnInit {

  meetingList: Meeting[];
  questionList: Question[];
  newMeeting: Meeting;
  meetingToEdit: Meeting;
  readMeeting: Meeting;
  isLoading = false;

  teamMember: TeamMember;

  constructor(private mService: MeetingsService,
    private tmService: TeamMemberService,
    private qsService: QuestionService,
    private toastrService: ToastrService) { }

  ngOnInit() {
  this.getEmulatedTeamMember();
  }

  getEmulatedTeamMember() {
    this.tmService.emulatedTeamMember
      .subscribe(data => {
        this.teamMember = data;
        this.getMeetings();
        this.getQuestions();
      }, error => {
        console.log(error);
      });
  }

  getMeetings() {
    this.isLoading = true;
    this.mService.getMeetings(this.teamMember.TeamMemberId)
      .subscribe(data => {
        this.isLoading = false;
        this.meetingList = data;
      }, error => {
        console.log(error);
        this.isLoading = false;
      });
  }

  getQuestions() {
    this.qsService.getQuestions(0)
      .subscribe(data => {
        this.questionList = data;
      }, error => {
        console.log(error);
      });
  }

  onEdit(meeting: Meeting) {
    this.meetingToEdit = meeting;
  }

  onRead(meeting: Meeting) {
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
    this.newMeeting = new Meeting();
    this.newMeeting.TeamMemberId = this.teamMember.TeamMemberId;
    this.newMeeting.Questions = _.cloneDeep(this.questionList);
  }

  showSuccessUpdate() {
    this.toastrService.success('', 'Meeting was updated successfully!');
  }

  showSuccessAdd() {
    this.toastrService.success('', 'New Meeting was added!');
  }

}
