import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamMember, TeamMemberService } from '../teamMember';

@Component({
  selector: 'app-app-base',
  templateUrl: './app-base.component.html',
  styleUrls: ['./app-base.component.scss']
})
export class AppBaseComponent implements OnInit {
  teamMember: TeamMember;
  constructor(private activatedRoute: ActivatedRoute, private tsService: TeamMemberService ) { }

  ngOnInit() {
    this.teamMember = this.activatedRoute.snapshot.data['teamMemberData'];
    this.tsService.teamMember = this.teamMember;
    console.log(this.teamMember);
  }

}
