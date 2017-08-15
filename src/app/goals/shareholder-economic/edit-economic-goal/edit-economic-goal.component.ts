import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { EconomicGoals } from '../model/detail';

import { EconomicGoalService } from '../service/economic-goal.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-edit-economic-goal',
  templateUrl: './edit-economic-goal.component.html',
  styleUrls: ['./edit-economic-goal.component.scss']
})
export class EditEconomicGoalComponent implements OnInit {
  @Input('economicGoals') economicGoals: EconomicGoals;
  @ViewChild('confirmModal') confirmModal: ModalDirective;

  goalToEdit: EconomicGoals;
  displayPersonal = true;
  displayPracticeUnit = false;
  displayIndustryTeam = false;
  destinationValue: number;
  detailChanged: boolean;

  constructor(private egService: EconomicGoalService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.cloneGoal(this.economicGoals);
  }

  cloneGoal(goal: EconomicGoals) {
    this.goalToEdit = _.cloneDeep(goal);
  }

  personalGoalClicked(dest: number) {
    if (this.displayPersonal === true) {
      return;
    } else {
      this.verifyBeforeDestinationChange(dest);
    }
  }

  practiceUnitClicked(dest: number) {
    if (this.displayPracticeUnit == true) {
      return;
    } else {
      this.verifyBeforeDestinationChange(dest);
    }
  }

  industryGoalClicked(dest: number) {
    if (this.displayIndustryTeam === true) {
      return;
    } else {
      this.verifyBeforeDestinationChange(dest);
    }
  }

  verifyBeforeDestinationChange(dest: number) {
    if (this.detailChanged === true) {
      this.showConfirmModal();
      this.destinationValue = dest;
    } else {
      this.toggleDestination(dest);
    }
  }

  toggleDestination(des: number) {
    switch (des) {
      case (1):
        this.displayPersonalGoal();
        break;
      case (2):
        this.displayPracticeUnitGoal();
        break;
      case (3):
        this.displayIndustryTeamGoal();
        break;
      default:
        this.displayPersonalGoal();
        break;
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
    this.egService.updateEconomicGoal(this.goalToEdit)
      .subscribe(data => {
        this.showSuccessUpdate();
        this.economicGoals = data;
        this.detailChanged = false;
      }, error => {
        this.showFailedUpdate();
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

  ignoreChanges() {
    this.confirmModal.hide();
    this.detailChanged = false;
    this.toggleDestination(this.destinationValue);
    this.cloneGoal(this.economicGoals);
  }

  confirmModalSave() {
    this.onSubmit();
    this.hideConfirmModal();
    this.detailChanged = false;
    this.toggleDestination(this.destinationValue);
  }

  showSuccessUpdate() {
    this.toastrService.success('', 'Goal was updated successfully!');
  }

  showFailedUpdate() {
    this.toastrService.error('', 'Error updating goal, please try again or contact help desk if issue persists');
  }

}
