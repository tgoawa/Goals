import { Component, OnInit } from '@angular/core';

import { ShareholderPrintService } from './services/shareholder-print.service';
import { PrintService } from '../non-shareholder/services/print.service';
import { TeamMemberService, TeamMember } from '../../teamMember/';
import { PrintView } from './model/print-view';
import { Hours } from '../../hours/models/hours';

@Component({
  selector: 'app-shareholder',
  templateUrl: './shareholder.component.html',
  styleUrls: ['./shareholder.component.scss']
})
export class ShareholderComponent implements OnInit {

  printGoal: PrintView;
  teamMember: TeamMember;
  hoursData: Hours;
  isLoading = false;

  constructor(private shprService: ShareholderPrintService, private tmService: TeamMemberService, private prService: PrintService) { }

  ngOnInit() {
    this.getEmulatedTeamMember();
  }

  getEmulatedTeamMember() {
    this.tmService.emulatedTeamMember
      .subscribe(data => {
        this.teamMember = data;
        this.getData(this.teamMember.TeamMemberId);
      }, error => {
        console.log(error);
      });
  }

  getData(id: number) {
    this.getPrintView(id);
    this.getHours(id);
  }

  getPrintView(id: number) {
    this.isLoading = true;
    this.shprService.getPrintView(id)
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
