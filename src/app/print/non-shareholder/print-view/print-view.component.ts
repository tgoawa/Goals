import { Component, OnInit, Input } from '@angular/core';

import { PrintView } from '../model/print-view';
import { Hours } from '../../../hours/models/hours';

@Component({
  selector: 'app-print-view',
  templateUrl: './print-view.component.html',
  styleUrls: ['./print-view.component.scss']
})
export class PrintViewComponent implements OnInit {
  @Input('printGoal') printGoal: PrintView;
  constructor() { }

  ngOnInit() {
  }

  printView() {
    window.print();
  }
}
