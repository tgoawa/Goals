import { Component, OnInit, Input } from '@angular/core';

import { Goal } from '../../../goals/goal';

@Component({
  selector: 'app-industry-goals',
  templateUrl: './industry-goals.component.html',
  styleUrls: ['./industry-goals.component.scss']
})
export class IndustryGoalsComponent implements OnInit {
  @Input('industryGoal') industryGoal;
  constructor() { }

  ngOnInit() {
  }

}
