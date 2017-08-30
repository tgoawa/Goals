import { Component, OnInit } from '@angular/core';

import { PrintService } from './services/print.service';
import { TeamMember, TeamMemberService } from '../../teamMember';
import { PrintView } from './model/print-view';
import { Hours } from '../../hours/models/hours';

@Component({
  selector: 'app-non-shareholder',
  templateUrl: './non-shareholder.component.html',
  styleUrls: ['./non-shareholder.component.scss']
})
export class NonShareholderComponent implements OnInit {

  printGoal: PrintView;
  teamMember: TeamMember;
  hoursData: Hours;
  isLoading = false;

  constructor(private prService: PrintService, private tsService: TeamMemberService) { }

  ngOnInit() {
    this.getEmulatedTeamMember();
  }

  getEmulatedTeamMember() {
    this.tsService.emulatedTeamMember
      .subscribe(data => {
        this.teamMember = data;
        this.getData(this.teamMember.TeamMemberId);
      }, error => {
        console.log(error);
      });
  }

  getData(id: number) {
    this.isLoading = true;
    this.getPrintViewGoals(id);
    this.getHours(id);
  }

  getPrintViewGoals(id: number) {
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
    this.prService.getHours(id)
      .subscribe(data => {
        // this.isLoading = false;
        this.hoursData = data;
      }, error => {
        this.isLoading = false;
        console.log(error);
      });
  }

  printView() {
    window.print();
  }
}
