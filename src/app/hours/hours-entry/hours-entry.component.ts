import { Component, OnInit, Input } from '@angular/core';

import { TeamMember, TeamMemberService } from '../../teamMember/';
import { Hours } from '../models/hours';

@Component({
  selector: 'app-hours-entry',
  templateUrl: './hours-entry.component.html',
  styleUrls: ['./hours-entry.component.scss']
})
export class HoursEntryComponent implements OnInit {
  @Input('hoursEntry') hoursEntry: Hours;

  teamMember: TeamMember;
  totalWorkHours: number;

  constructor(private tmService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
  }

}
