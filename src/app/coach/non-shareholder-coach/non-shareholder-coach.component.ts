import { Component, OnInit } from '@angular/core';
import { PrintService } from '../../print/non-shareholder/services/print.service';
import { TeamMember } from '../../teamMember';
import { PrintView } from '../../print/non-shareholder/model/print-view';

@Component({
  selector: 'app-non-shareholder-coach',
  templateUrl: './non-shareholder-coach.component.html',
  styleUrls: ['./non-shareholder-coach.component.scss']
})
export class NonShareholderCoachComponent implements OnInit {

  printGoal: PrintView;
  isLoading = false;

  constructor(private prService: PrintService) { }

  ngOnInit() {
  }

  getTeamMemberPrintView(id: number) {
    this.isLoading = true;
    this.prService.getCurrentGoals(id)
      .subscribe(data => {
        this.isLoading = false;
        this.printGoal = data;
      }, error => {
        console.log(error);
        this.isLoading = false;
      });
  }
}
