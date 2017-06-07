import { Component, OnInit } from '@angular/core';

import { PersonalGoalService } from '../service/personal-goal.service';
import { Goal } from '../../goal';

@Component({
  selector: 'app-personal-goal-list',
  templateUrl: './personal-goal-list.component.html',
  styleUrls: ['./personal-goal-list.component.scss']
})
export class PersonalGoalListComponent implements OnInit {

  personalGoalList: Goal[];
  isLoading = false;

  constructor(private pgService: PersonalGoalService) { }

  ngOnInit() {
    this.getGoals(1936);
  }

  getGoals(id: number) {
    this.isLoading = true;
    this.pgService.getPersonalGoals(id)
    .subscribe(data => {
      this.isLoading = false;
      console.log(data);
      this.personalGoalList = data;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }
}
