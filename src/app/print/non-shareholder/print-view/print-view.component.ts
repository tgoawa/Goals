import { Component, OnInit, Input } from '@angular/core';

import { PrintService } from '../services/print.service';
import { PrintView } from '../model/print-view';
import { Hours } from '../../../hours/models/hours';

@Component({
  selector: 'app-print-view',
  templateUrl: './print-view.component.html',
  styleUrls: ['./print-view.component.scss']
})
export class PrintViewComponent implements OnInit {
  @Input('printGoal') printGoal: PrintView;
  @Input('coachName') coachName: string;

  competencyList: any[];
  competencyTypeList: any[];

  constructor(private prService: PrintService) { }

  ngOnInit() {
    this.getCompetencies();
    this.getCompetencyTypes();
  }

  printView() {
    window.print();
  }

  getCompetencies() {
    this.prService.getCompetencies()
      .subscribe(data => {
        this.competencyList = data;
      }, error => {
        console.log(error);
      });
  }

  getCompetencyTypes() {
    this.prService.getCompetencyTypes()
      .subscribe(data => {
        this.competencyTypeList = data;
      }, error => {
        console.log(error);
      });
  }
}
