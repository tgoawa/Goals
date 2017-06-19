import { Component, OnInit } from '@angular/core';

import { MeetingsService } from '../services/meetings.service';
import { TeamMember, TeamMemberService } from '../../../teamMember';
import { Meeting } from '../model/meeting.model';

@Component({
  selector: 'app-meetings-list',
  templateUrl: './meetings-list.component.html',
  styleUrls: ['./meetings-list.component.scss']
})
export class MeetingsListComponent implements OnInit {

  meetingList: Meeting[];
  private teamMember: TeamMember;
  constructor(private mService: MeetingsService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    this.getMeetings();
  }

  getMeetings() {
    this.mService.getMeetings(this.teamMember.TeamMemberId)
    .subscribe(data => {
      console.log(data);
      this.meetingList = data;
    }, error => {
      console.log(error);
    });
  }

}
