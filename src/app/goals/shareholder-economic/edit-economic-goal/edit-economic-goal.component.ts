import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private egService: EconomicGoalService, private toastrService: ToastrService) { }

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

  confirmModalSave() {
    this.onSubmit();
    this.hideConfirmModal();
  }

  showSuccessUpdate() {
    this.toastrService.success('', 'Goal was updated successfully!');
  }

  showFailedUpdate() {
    this.toastrService.error('', 'Error updating goal, please try again or contact help desk if issue persists');
  }

}
