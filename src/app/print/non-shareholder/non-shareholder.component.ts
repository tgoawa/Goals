import { Component, OnInit } from '@angular/core';

import { PrintService } from './services/print.service';
import { TeamMember, TeamMemberService } from '../../teamMember';
import { PrintView } from './model/print-view';

@Component({
  selector: 'app-non-shareholder',
  templateUrl: './non-shareholder.component.html',
  styleUrls: ['./non-shareholder.component.scss']
})
export class NonShareholderComponent implements OnInit {

  printGoal: PrintView;
  teamMember: TeamMember;
  isLoading = false;

  constructor(private prService: PrintService, private tsService: TeamMemberService ) { }

  ngOnInit() {
    this.teamMember = this.tsService.teamMember;
    this.getPrintViewGoals(this.teamMember.TeamMemberId);
  }

  getPrintViewGoals(id: number) {
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

  printView() {
    window.print();
  }
}
