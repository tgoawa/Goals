import { Component, OnInit } from '@angular/core';
import { TeamMember, TeamMemberService } from '../teamMember';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  defaultTeamMember: TeamMember;
  emulatedTeamMember: TeamMember;

  constructor(private tmService: TeamMemberService) { }

  ngOnInit() {
    this.defaultTeamMember = this.tmService.defaultTeamMember;
    this.getEmulatedTeamMember();
  }

  getEmulatedTeamMember() {
    this.tmService.emulatedTeamMember
      .subscribe(data => {
        this.emulatedTeamMember = data;
      }, error => {
        console.log(error);
      });
  }

  resetToDefaultTeamMember() {
    this.tmService.setEmulatedTeamMember(this.defaultTeamMember);
  }
}
