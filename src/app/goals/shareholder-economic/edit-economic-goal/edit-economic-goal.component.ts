import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { EconomicGoals } from '../model/detail';

import { EconomicGoalService } from '../service/economic-goal.service';

@Component({
  selector: 'app-edit-economic-goal',
  templateUrl: './edit-economic-goal.component.html',
  styleUrls: ['./edit-economic-goal.component.scss']
})
export class EditEconomicGoalComponent implements OnInit {
  @Input('economicGoals') economicGoals: EconomicGoals;
  @ViewChild('confirmModal') confirmModal: ModalDirective;

  displayPersonal = true;
  displayPracticeUnit = false;
  displayIndustryTeam = false;
  detailChanged: boolean;

  constructor(private egService: EconomicGoalService) { }

  ngOnInit() {
  }

  personalGoalClicked() {
    if (this.detailChanged === true) {
      this.showConfirmModal();
      this.displayPersonalGoal();
    } else {
      this.displayPersonalGoal();
    }
  }

  practiceUnitClicked() {
    if (this.detailChanged === true) {
      this.showConfirmModal();
      this.displayPracticeUnitGoal();
    } else {
      this.displayPracticeUnitGoal();
    }
  }

  industryGoalClicked() {
    if (this.detailChanged === true) {
      this.showConfirmModal();
      this.displayIndustryTeamGoal();
    } else {
      this.displayIndustryTeamGoal();
    }
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
    this.egService.updateEconomicGoal(this.economicGoals)
      .subscribe(data => {
        console.log(data);
        this.economicGoals = data;
      }, error => {
        console.log(error);
      });
  }

  detailDirty() {
    this.detailChanged = true;
  }

  showConfirmModal() {
    this.confirmModal.show();
  }

  hideConfirmModal() {
    this.confirmModal.hide();
  }

  confirmModalSave() {
    this.onSubmit();
    this.hideConfirmModal();
  }

}
