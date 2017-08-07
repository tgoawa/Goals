import { Component, OnInit, Input } from '@angular/core';
import { TeamMember, TeamMemberService } from '../../../teamMember';
import { Hours, CategoryWrapper } from '../../../hours/models/hours';
import { PrintService } from '../../non-shareholder/services/print.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {

  hoursData: Hours;
  hoursCategories: CategoryWrapper;
  teamMember: TeamMember;
  isLoading = false;

  constructor(private prService: PrintService, private tsService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tsService.teamMember;
    this.getHours(this.teamMember.TeamMemberId);
    this.getHoursCategories();
  }

  getHours(id: number) {
    this.isLoading = true;
    this.prService.getHours(id)
      .subscribe(data => {
        this.isLoading = false;
        console.log(data);
        this.hoursData = data;
      }, error => {
        this.isLoading = false;
        console.log(error);
      });
  }

  getHoursCategories() {
    this.isLoading = true;
    this.prService.getCategories()
      .subscribe(data => {
        this.isLoading = false;
        console.log(data);
        this.hoursCategories = data;
      }, error => {
        this.isLoading = false;
        console.log(error);
      });
  }


}
