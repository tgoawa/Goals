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

  personalButtonClasses = {
    btn: true,
    'btn-secondary': false,
    'btn-primary': true
  };

  practiceButtonClasses = {
    btn: true,
    'btn-secondary': true,
    'btn-primary': false
  };

  industryButtonClasses = {
    btn: true,
    'btn-secondary': true,
    'btn-primary': false
  };

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
