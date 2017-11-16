import { Component, OnInit } from '@angular/core';
import { PrintService } from '../../print/non-shareholder/services/print.service';
import { TeamMember } from '../../teamMember';
import { PrintView } from '../../print/non-shareholder/model/print-view';
import { Hours } from '../../hours/models/hours';

@Component({
  selector: 'app-non-shareholder-coach',
  templateUrl: './non-shareholder-coach.component.html',
  styleUrls: ['./non-shareholder-coach.component.scss']
})
export class NonShareholderCoachComponent implements OnInit {
  teamMember: TeamMember;
  printGoal: PrintView;
  hoursData: Hours;
  isLoading = false;

  constructor(private prService: PrintService) { }

  ngOnInit() {
  }

  getData(teamMember: TeamMember) {
    if (teamMember === undefined) {
      return;
    }
    this.teamMember = teamMember;
    this.getTeamMemberPrintView(teamMember.TeamMemberId);
    this.getHours(teamMember.TeamMemberId);
  }

  getTeamMemberPrintView(id: number) {
    this.isLoading = true;
    this.prService.getCurrentGoals(id)
      .subscribe(data => {
        this.isLoading = false;
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
}
