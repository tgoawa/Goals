import { Component, OnInit } from '@angular/core';

import { TeamMember, TeamMemberService } from '../../teamMember/';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-entry',
  templateUrl: './admin-entry.component.html',
  styleUrls: ['./admin-entry.component.scss']
})
export class AdminEntryComponent implements OnInit {

  teamMemberList: TeamMember[];
  emulatedTeamMember: TeamMember;

  constructor(private adminService: AdminService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.getTeamMembers();
  }

  getTeamMembers() {
    this.adminService.getTeamMembers()
    .subscribe(data => {
      this.teamMemberList = data;
    }, error => {
      console.log(error);
    });
  }

}
