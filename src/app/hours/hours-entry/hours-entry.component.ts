import { Component, OnInit, Input } from '@angular/core';

import { HoursService } from '../services/hours.service';
import { TeamMember, TeamMemberService } from '../../teamMember/';
import { Hours } from '../models/hours';

@Component({
  selector: 'app-hours-entry',
  templateUrl: './hours-entry.component.html',
  styleUrls: ['./hours-entry.component.scss']
})
export class HoursEntryComponent implements OnInit {

  hours: Hours;
  isLoading = false;
  teamMember: TeamMember;
  totalWorkHours: number;

  constructor(private hoursService: HoursService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    this.getHours();
  }

    getHours() {
    this.isLoading = true;
    this.hoursService.getHours(this.teamMember.TeamMemberId)
    .subscribe(data => {
      console.log(data);
      this.hours = data;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.log(error);
    });
  }

}
