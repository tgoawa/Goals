import { Component, OnInit } from '@angular/core';
import { TeamMember, TeamMemberService } from '../../teamMember';
import { CoachService } from '../service/coach.service';

@Component({
  selector: 'app-cpe-report',
  templateUrl: './cpe-report.component.html',
  styleUrls: ['./cpe-report.component.scss']
})
export class CpeReportComponent implements OnInit {
  teamMemberList: TeamMember[];
  coach: TeamMember;
  constructor(private coachService: CoachService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.getEmulatedTeamMember();
  }

  getCPEList(coachId: number) {
    this.coachService.getCPETeamMemberList(coachId)
    .subscribe(data => {
      this.teamMemberList = data;
    }, error => console.error(error))
  }

  private getEmulatedTeamMember() {
    this.tmService.emulatedTeamMember
    .subscribe(data => {
      this.coach = data;
      this.getCPEList(this.coach.TeamMemberId);
    }, error => {
      console.error(error);
    })
  }

}
