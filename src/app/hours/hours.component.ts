import { Component, OnInit } from '@angular/core';

import { HoursService } from './services/hours.service';
import { TeamMember, TeamMemberService } from '../teamMember/';
import { Hours } from './models/hours';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {
  isLoading = false;
  teamMember: TeamMember;
  hours: Hours;

  constructor(private hoursService: HoursService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    this.getHours();
  }

  getHours() {
    this.isLoading = true;
    this.hoursService.getHours(this.teamMember.TeamMemberId)
    .subscribe(data => {
      this.hours = data;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.log(error);
    })
  }

}
