import { Component, OnInit } from '@angular/core';

import { PrintService } from './services/print.service';
import { TeamMember, TeamMemberService } from '../../teamMember';
import { Hours, CategoryWrapper } from '../../hours/models/hours';
import { PrintView } from './model/print-view';

@Component({
  selector: 'app-non-shareholder',
  templateUrl: './non-shareholder.component.html',
  styleUrls: ['./non-shareholder.component.scss']
})
export class NonShareholderComponent implements OnInit {

  printGoal: PrintView;
  hoursData: Hours;
  hoursCategories: CategoryWrapper;
  teamMember: TeamMember;
  isLoading = false;

  constructor(private prService: PrintService, private tsService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tsService.teamMember;
    this.getData(this.teamMember.TeamMemberId);
  }

  getData(id: number) {
    this.getHoursCategories();
    this.getPrintViewGoals(id);
    this.getHours(id);
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

  getHours(id: number) {
    this.prService.getHours(id)
      .subscribe(data => {
        console.log(data);
        this.hoursData = data;
      }, error => {
        console.log(error);
      });
  }

  getHoursCategories() {
    this.prService.getCategories()
      .subscribe(data => {
        console.log(data);
        this.hoursCategories = data;
      }, error => {
        console.log(error);
      });
  }
  printView() {
    window.print();
  }
}
