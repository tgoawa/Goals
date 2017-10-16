import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamMember, TeamMemberService } from '../teamMember';
import { Observable } from 'rxjs/Observable';

import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  defaultTeamMember: TeamMember;
  emulatedTeamMember: TeamMember;

  constructor(private tmService: TeamMemberService, private router: Router) { }

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

  onLogout() {
    Cookie.delete('user');
    this.router.navigate(['/login']);
  }

  resetToDefaultTeamMember() {
    this.tmService.setEmulatedTeamMember(this.defaultTeamMember);
  }
}
