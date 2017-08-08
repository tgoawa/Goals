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
  @Input('hoursData') hoursData: Hours;
  hoursCategories: CategoryWrapper;
  teamMember: TeamMember;
  isLoading = false;

  constructor(private prService: PrintService, private tsService: TeamMemberService) { }

  ngOnInit() {
    this.teamMember = this.tsService.teamMember;
    this.getHoursCategories();
  }


  getHoursCategories() {
    this.isLoading = true;
    this.prService.getCategories()
      .subscribe(data => {
        this.isLoading = false;
        this.hoursCategories = data;
      }, error => {
        this.isLoading = false;
        console.log(error);
      });
  }


}
