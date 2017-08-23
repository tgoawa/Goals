import { Component, OnInit } from '@angular/core';
import { ShareholderPrintService } from '../../print/shareholder/services/shareholder-print.service';
import { PrintService } from '../../print/non-shareholder/services/print.service';
import { CoachService } from '../service/coach.service';
import { TeamMember, TeamMemberService } from '../../teamMember/';
import { PrintView } from '../../print/shareholder/model/print-view';
import { Hours } from '../../hours/models/hours';

@Component({
  selector: 'app-shareholder-coach',
  templateUrl: './shareholder-coach.component.html',
  styleUrls: ['./shareholder-coach.component.scss']
})
export class ShareholderCoachComponent implements OnInit {

  printGoal: PrintView;
  hoursData: Hours;
  coach: TeamMember;
  teamMember: TeamMember;
  teamMemberList: TeamMember[];
  isLoading = false;

  constructor(private shprService: ShareholderPrintService,
    private cService: CoachService,
    private tmService: TeamMemberService,
    private prService: PrintService) { }

  ngOnInit() {
    this.coach = this.tmService.teamMember;
    this.getShareholderTeamMemberList();
  }

  getData(id: number) {
    if (isNaN(id)) {
      return;
    }
    this.getShareHolderPrintView(id);
    this.getHours(id);
  }

  getShareHolderPrintView(teamMemberid: number) {
      this.isLoading = true;
      this.shprService.getPrintView(teamMemberid)
        .subscribe(data => {
          this.isLoading = false;
          this.mapToTeamMember(teamMemberid);
          this.printGoal = data;
        }, error => {
          console.log(error);
          this.isLoading = false;
        });
  }

  getHours(id: number) {
    this.isLoading = true;
    this.prService.getHours(id)
      .subscribe(data => {
        this.isLoading = false;
        this.hoursData = data;
      }, error => {
        this.isLoading = false;
        console.log(error);
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
    for (let index = 0; index < this.teamMemberList.length; index++) {
      if (teamMemberId === this.teamMemberList[index].TeamMemberId) {
        this.teamMember = this.teamMemberList[index];
      }
    }
  }

}
