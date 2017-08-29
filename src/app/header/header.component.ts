import { Component, OnInit } from '@angular/core';
import { TeamMember, TeamMemberService } from '../teamMember';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  teamMember: TeamMember;

  constructor(private tmService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tmService.emulatedTeamMember;
  }

}
