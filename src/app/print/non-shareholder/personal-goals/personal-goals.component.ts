import { Component, OnInit, Input } from '@angular/core';

import { Goal } from '../../../goals/goal';

@Component({
  selector: 'app-personal-goals',
  templateUrl: './personal-goals.component.html',
  styleUrls: ['./personal-goals.component.scss']
})
export class PersonalGoalsComponent implements OnInit {
  @Input('personalGoal') personalGoal: Goal;
  constructor() { }

  ngOnInit() {
  }

}
