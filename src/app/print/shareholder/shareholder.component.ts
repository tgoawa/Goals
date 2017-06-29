import { Component, OnInit } from '@angular/core';

import { ShareholderPrintService } from './services/shareholder-print.service';
import { TeamMemberService, TeamMember } from '../../teamMember/';
import { PrintView } from './model/print-view';

@Component({
  selector: 'app-shareholder',
  templateUrl: './shareholder.component.html',
  styleUrls: ['./shareholder.component.scss']
})
export class ShareholderComponent implements OnInit {

  printGoal: PrintView;
  teamMember: TeamMember;
  isLoading = false;

  constructor(private prService: ShareholderPrintService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    this.getPrintView(this.teamMember.TeamMemberId);
  }

  getPrintView(id: number) {
    this.isLoading = true;
    this.prService.getPrintView(id)
    .subscribe(data => {
      this.isLoading = false;
      this.printGoal = data;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }

  printView() {
    window.print();
  }
}
