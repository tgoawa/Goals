import { Component, OnInit, Input } from '@angular/core';

import { PrintService } from '../../non-shareholder/services/print.service';
import { ShareholderPrintService } from '../services/shareholder-print.service';
import { PrintView } from '../model/print-view';
import { TeamMember } from '../../../teamMember/';

@Component({
  selector: 'app-shareholder-print-view',
  templateUrl: './shareholder-print-view.component.html',
  styleUrls: ['./shareholder-print-view.component.scss']
})
export class ShareholderPrintViewComponent implements OnInit {
  @Input('printGoal') printGoal: PrintView;
  @Input('teamMember') teamMember: TeamMember;

  competencyList: any[];
  competencyTypeList: any[];
  wigList: any[];

  constructor(private prService: PrintService, private shPrintService: ShareholderPrintService) { }

  ngOnInit() {
    this.getCompetencies();
    this.getCompetencyTypes();
    this.getWIGs();
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

  getWIGs() {
    this.shPrintService.getWIGs()
    .subscribe(data => {
      this.wigList = data;
    }, error => {
      console.log(error);
    });
  }

}
