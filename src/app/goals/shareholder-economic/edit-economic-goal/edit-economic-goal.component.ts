import { Component, OnInit, Input } from '@angular/core';
import { EconomicGoals } from '../model/detail';

@Component({
  selector: 'app-edit-economic-goal',
  templateUrl: './edit-economic-goal.component.html',
  styleUrls: ['./edit-economic-goal.component.scss']
})
export class EditEconomicGoalComponent implements OnInit {
  @Input('economicGoals') economicGoals: EconomicGoals;

  displayPersonal = true;
  displayPracticeUnit = false;
  displayIndustryTeam = false;

  constructor() { }

  ngOnInit() {
  }

  displayPersonalGoal() {
    this.displayPersonal = true;
    this.displayPracticeUnit = false;
    this.displayIndustryTeam = false;
  }

  displayPracticeUnitGoal() {
    this.displayPersonal = false;
    this.displayPracticeUnit = true;
    this.displayIndustryTeam = false;
  }

  displayIndustryTeamGoal() {
    this.displayPersonal = false;
    this.displayPracticeUnit = false;
    this.displayIndustryTeam = true;
  }

  onSubmit() {

  }

}
