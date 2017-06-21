import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { QuestionService } from '../services/question.service';
import { MeetingsService } from '../services/meetings.service';
import { TeamMember, TeamMemberService } from '../../../teamMember';
import { Question } from '../model/question.model';
import { Meeting } from '../model/meeting.model';

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
  isLoading = false;

  teamMember: TeamMember;

  constructor(private mService: MeetingsService,
  private tmService: TeamMemberService,
  private qsService: QuestionService,
  private toastrService: ToastrService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    this.getMeetings();
    this.getQuestions();
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
      console.log(data);
      this.questionList = data;
    }, error => {
      console.log(error);
    });
  }

  onEdit(meeting: Meeting) {
    this.meetingToEdit = meeting;
  }

  clearMeetingToEdit() {
    this.meetingToEdit = undefined;
  }

  clearNewMeeting() {
    this.newMeeting = undefined;
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
    this.newMeeting = new Meeting;
    this.newMeeting.CoachId = 0;
    this.newMeeting.TeamMemberId = this.teamMember.TeamMemberId;
    this.newMeeting.Questions = this.questionList;
  }

    showSuccessUpdate() {
    this.toastrService.success('', 'Meeting was updated successfully!');
  }

  showSuccessAdd() {
    this.toastrService.success('', 'New Meeting was added!');
  }

}
