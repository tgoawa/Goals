import { Component, OnInit } from '@angular/core';
import { TeamMember, TeamMemberService } from '../teamMember';

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
    this.emulatedTeamMember = this.tmService.emulatedTeamMember;
    this.defaultTeamMember = this.defaultTeamMember;
  }

}
