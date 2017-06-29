import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { TeamMember} from '../../../teamMember/';

@Component({
  selector: 'app-shteam-member-list',
  templateUrl: './shteam-member-list.component.html',
  styleUrls: ['./shteam-member-list.component.scss']
})
export class ShteamMemberListComponent implements OnInit {
  @Input('teamMemberList') teamMemberList: TeamMember[];
  @Output() selectedTeamMember: EventEmitter<number> = new EventEmitter<number>();
  teamMemberid: number;

  constructor() { }

  ngOnInit() {
  }


  teamMemberSelected() {
    this.selectedTeamMember.emit(+this.teamMemberid);
  }

}
