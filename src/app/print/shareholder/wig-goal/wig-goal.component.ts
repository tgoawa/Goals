import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../../../goals/goal';
import { ShareholderPrintService } from '../services/shareholder-print.service';

@Component({
  selector: 'app-wig-goal',
  templateUrl: './wig-goal.component.html',
  styleUrls: ['./wig-goal.component.scss']
})
export class WigGoalComponent implements OnInit {
  @Input('wigGoal') wigGoal: Goal;

  wigList: any[];
  wigTitle: string;
  wigDescription: string;
  constructor(private prService: ShareholderPrintService) { }

  ngOnInit() {
    this.getWIGs();
  }

  getWIGs() {
    this.prService.getWIGs()
    .subscribe(data => {
      this.wigList = data;
      this.mapWIGs();
    }, error => {
      console.log(error);
    });
  }

  mapWIGs() {
    for (let index = 0; index < this.wigList.length; index ++) {
      if (this.wigGoal.GoalWIGId === this.wigList[index].GoalWIGId) {
        this.wigTitle = this.wigList[index].WIGTitle;
        this.wigDescription = this.wigList[index].WIGDescription;
      }
    }
  }

}
