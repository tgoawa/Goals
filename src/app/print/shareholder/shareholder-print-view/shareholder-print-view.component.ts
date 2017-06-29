import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  printView() {
    window.print();
  }
}
