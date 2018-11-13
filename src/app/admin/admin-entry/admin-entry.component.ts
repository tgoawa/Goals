import { Component, OnInit } from '@angular/core';

import { TeamMember, TeamMemberService } from '../../teamMember/';
import { AdminService } from '../services/admin.service';
import { environment } from '../../../environments/environment';

const envUrl = environment.envUrl;

@Component({
  selector: 'app-admin-entry',
  templateUrl: './admin-entry.component.html',
  styleUrls: ['./admin-entry.component.scss']
})
export class AdminEntryComponent implements OnInit {
  goalsReportAppUrl = envUrl + ':1036/#/home';
  teamMemberList: TeamMember[];
  defaultTeamMember: TeamMember;
  emulatedTeamMember: TeamMember;
  selected: string;

  constructor(private adminService: AdminService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.getTeamMembers();
    this.getEmulatedTeamMember();
    this.defaultTeamMember = this.tmService.defaultTeamMember;
  }

  getEmulatedTeamMember() {
    this.tmService.emulatedTeamMember
      .subscribe(data => {
        this.emulatedTeamMember = data;
      }, error => {
        console.log(error);
      });
  }

  getTeamMembers() {
    this.adminService.getTeamMembers()
      .subscribe(data => {
        this.teamMemberList = data;
      }, error => {
        console.log(error);
      });
  }

  mapTeamMember() {
    for (let index = 0; index < this.teamMemberList.length; index++) {
      if (this.selected === this.teamMemberList[index].LastFirstName) {
        this.tmService.getTeamMember(this.teamMemberList[index].UserName)
          .subscribe(data => {
            this.emulatedTeamMember = data;
          }, error => {
            console.log('Error getting team member to impersonate');
          });
        break;
      }
    }
  }

  assignEmulatedTeamMember() {
    this.tmService.setEmulatedTeamMember(this.emulatedTeamMember);
  }

}
