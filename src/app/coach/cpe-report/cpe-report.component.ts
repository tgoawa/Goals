import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../../teamMember';

@Component({
  selector: 'app-cpe-report',
  templateUrl: './cpe-report.component.html',
  styleUrls: ['./cpe-report.component.scss']
})
export class CpeReportComponent implements OnInit {
  teamMemberList: TeamMember;
  constructor() { }

  ngOnInit() {
  }

}
