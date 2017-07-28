import { Component, OnInit, Input } from '@angular/core';

import { HoursService } from '../services/hours.service';
import { TeamMember, TeamMemberService } from '../../teamMember/';
import { Hours, Categories } from '../models/hours';

@Component({
  selector: 'app-hours-entry',
  templateUrl: './hours-entry.component.html',
  styleUrls: ['./hours-entry.component.scss']
})
export class HoursEntryComponent implements OnInit {

  hours: Hours;
  categories: Categories[];
  isLoading = false;
  teamMember: TeamMember;
  totalWorkHours: number;

  constructor(private hoursService: HoursService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    this.getData();
  }

  getData() {
    if (this.hours === undefined && this.categories === undefined) {
      this.getHours();
      this.getNames();
    }
    return;
  }

  getHours() {
    this.isLoading = true;
    this.hoursService.getHours(this.teamMember.TeamMemberId)
      .subscribe(data => {
        this.isLoading = false;
        console.log(data);
        this.hours = data;
      }, error => {
        this.isLoading = false;
        console.log(error);
      });
  }

  getNames() {
    this.isLoading = true;
    this.hoursService.getCategories()
      .subscribe(data => {
        console.log(data);
        this.isLoading = false;
        this.categories = data;
      }, error => {
        this.isLoading = false;
        console.log(error);
      });
  }

}
