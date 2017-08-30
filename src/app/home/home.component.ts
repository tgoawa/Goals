import { Component, OnInit } from '@angular/core';
import { TeamMember, TeamMemberService } from '../teamMember/';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

const envName = environment.envName;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  appEnvironment = envName;
  teamMember: TeamMember;
  isValidTeamMemberId: boolean;

  constructor(private tmService: TeamMemberService) { }

  ngOnInit() {
    // this.teamMember = this.tmService.emulatedTeamMember;
    // this.isTeamMemberValid();
    this.getEmulatedTeamMember();
  }

  getEmulatedTeamMember() {
    this.tmService.emulatedTeamMember
      .subscribe(data => {
        this.teamMember = data;
        this.isTeamMemberValid();
        console.log(this.teamMember);
      }, error => {
        console.log(error);
      });
  }

  isTeamMemberValid() {
    if (this.teamMember.TeamMemberId > 0) {
      this.isValidTeamMemberId = true;
    } else {
      this.isValidTeamMemberId = false;
    }
  }

}
