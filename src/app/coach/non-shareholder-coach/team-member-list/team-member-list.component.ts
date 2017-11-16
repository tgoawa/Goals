import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CoachService } from '../../service/coach.service';
import { TeamMember, TeamMemberService } from '../../../teamMember/';

@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.component.html',
  styleUrls: ['./team-member-list.component.scss']
})
export class TeamMemberListComponent implements OnInit {
  @Output() selectedTeamMember: EventEmitter<TeamMember> = new EventEmitter<TeamMember>();

  teamMemberList: TeamMember[];
  coach: TeamMember;
  teamMemberId: number;
  constructor(private coachService: CoachService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.getEmulatedTeamMember();
  }

  getTeamMemberList() {
    this.coachService.getCoachEmployees(this.coach.TeamMemberId)
      .subscribe(data => {
        this.teamMemberList = data;
      }, error => {
        console.log(error);
      });
  }

  getEmulatedTeamMember() {
    this.tmService.emulatedTeamMember
      .subscribe(data => {
        this.coach = data;
        this.getTeamMemberList();
      }, error => {
        console.log(error);
      });
  }

  teamMemberSelected() {
    for (let x = 0; x < this.teamMemberList.length; x++) {
      if (+this.teamMemberId === this.teamMemberList[x].TeamMemberId) {
        this.selectedTeamMember.emit(this.teamMemberList[x]);
      }
    }
  }
}
