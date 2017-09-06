import { Component, OnInit } from '@angular/core';

import { TeamMember, TeamMemberService } from '../teamMember/';
import { Hours } from './models/hours';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
