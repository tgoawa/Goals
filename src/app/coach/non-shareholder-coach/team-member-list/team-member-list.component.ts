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
  teamMember: TeamMember;
  constructor(private coachService: CoachService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.coach = this.tmService.teamMember;
    this.getTeamMemberList();
  }

  getTeamMemberList() {
    this.coachService.getCoachEmployees(this.coach.TeamMemberId)
    .subscribe(data => {
      this.teamMemberList = data;
    }, error => {
      console.log(error);
    });
  }

  teamMemberSelected() {
    this.selectedTeamMember.emit(this.teamMember);
  }
}
