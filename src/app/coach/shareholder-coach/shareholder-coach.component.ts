import { Component, OnInit } from '@angular/core';
import { ShareholderPrintService } from '../../print/shareholder/services/shareholder-print.service';
import { CoachService } from '../service/coach.service';
import { TeamMember, TeamMemberService } from '../../teamMember/';
import { PrintView } from '../../print/shareholder/model/print-view';

@Component({
  selector: 'app-shareholder-coach',
  templateUrl: './shareholder-coach.component.html',
  styleUrls: ['./shareholder-coach.component.scss']
})
export class ShareholderCoachComponent implements OnInit {

  printGoal: PrintView;
  coach: TeamMember;
  teamMember: TeamMember;
  teamMemberList: TeamMember[];
  isLoading = false;

  constructor(private prService: ShareholderPrintService, private cService: CoachService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.coach = this.tmService.teamMember;
    this.getShareholderTeamMemberList();
  }

  getShareHolderPrintView(teamMemberid: number) {
    this.isLoading = true;
    this.prService.getPrintView(teamMemberid)
    .subscribe(data => {
      this.isLoading = false;
      this.mapToTeamMember(teamMemberid);
      this.printGoal = data;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }

    getShareholderTeamMemberList() {
    this.cService.getShareholderCoachEmployees(this.coach.TeamMemberId)
    .subscribe(data => {
      this.teamMemberList = data;
    }, error => {
      console.log(error);
    });
  }

  mapToTeamMember(teamMemberId: number) {
    for (let index = 0; index < this.teamMemberList.length; index ++) {
      if (teamMemberId === this.teamMemberList[index].TeamMemberId) {
        this.teamMember = this.teamMemberList[index];
      }
    }
  }

}
