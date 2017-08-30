import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

import { HoursService } from '../services/hours.service';
import { TeamMember, TeamMemberService } from '../../teamMember/';
import { Hours, CategoryWrapper, Item } from '../models/hours';

import * as _ from 'lodash';

@Component({
  selector: 'app-hours-entry',
  templateUrl: './hours-entry.component.html',
  styleUrls: ['./hours-entry.component.scss']
})
export class HoursEntryComponent implements OnInit, OnChanges {
  @ViewChild('staticModal') public staticModal: ModalDirective;

  hours: Hours;
  hoursToEdit: Hours;
  categories: CategoryWrapper;
  destinationValue: number;
  displayNonCharge = true;
  displayIndustryTeam = false;
  displayServiceLine = false;
  isLoading = false;
  isDirty = false;
  teamMember: TeamMember;
  totalWorkHours: number;

  industryTeamHours = 0;
  nonChargeTotalHours = 0;
  serviceLineTotalHours = 0;

  constructor(private hoursService: HoursService,
    private tmService: TeamMemberService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    // this.teamMember = this.tmService.emulatedTeamMember;
    // this.getData();
  }

  ngOnChanges() {
    this.calculateTotalHours();
  }

  canDeactivate() {
    if (this.isDirty) {
      this.showModal();
      return false;
    }
    return true;
  }

  calculateTotalHours() {
    this.totalWorkHours = this.nonChargeTotalHours + this.serviceLineTotalHours;
  }

  displayNonChargeHours() {
    this.displayNonCharge = true;
    this.displayIndustryTeam = false;
    this.displayServiceLine = false;
  }

  displayIndustryTeamHours() {
    this.displayNonCharge = false;
    this.displayIndustryTeam = true;
    this.displayServiceLine = false;
  }

  displayServiceLineHours() {
    this.displayNonCharge = false;
    this.displayIndustryTeam = false;
    this.displayServiceLine = true;
  }

  nonChargeClicked(dest: number) {
    if (this.displayNonCharge === true) {
      return;
    } else {
      this.verifyBeforeDestinationChange(dest);
    }
  }

  industryTeamClicked(dest: number) {
    if (this.displayIndustryTeam === true) {
      return;
    } else {
      this.verifyBeforeDestinationChange(dest);
    }
  }

  serviceLineClick(dest: number) {
    if (this.displayServiceLine === true) {
      return;
    } else {
      this.verifyBeforeDestinationChange(dest);
    }
  }

  verifyBeforeDestinationChange(dest: number) {
    if (this.isDirty === true) {
      this.showModal();
      this.destinationValue = dest;
    } else {
      this.toggleDestination(dest);
    }
  }

  toggleDestination(des: number) {
    switch (des) {
      case (1):
        this.displayNonChargeHours();
        break;
      case (2):
        this.displayIndustryTeamHours();
        break;
      case (3):
        this.displayServiceLineHours();
        break;
      default:
        this.displayNonChargeHours();
        break;
    }
  }

  makeDirty() {
    this.isDirty = true;
  }

  getData() {
    if (this.hours === undefined && this.categories === undefined) {
      this.getHours();
      this.getNames();
    }
    return;
  }

  getHours() {
    this.isLoading = true;
    this.hoursService.getHours(this.teamMember.TeamMemberId)
      .subscribe(data => {
        this.isLoading = false;
        this.hours = data;
        this.hoursToEdit = _.cloneDeep(this.hours);
      }, error => {
        this.isLoading = false;
        console.log(error);
      });
  }

  getNames() {
    this.isLoading = true;
    this.hoursService.getCategories()
      .subscribe(data => {
        this.isLoading = false;
        this.categories = data;
      }, error => {
        this.isLoading = false;
        console.log(error);
      });
  }

  setNonChargeTotal(hours: number) {
    this.nonChargeTotalHours = hours;
    this.calculateTotalHours();
  }

  setServiceLineTotal(hours: number) {
    this.serviceLineTotalHours = hours;
    this.calculateTotalHours();
  }

  setIndustryTeamTotal(hours: number) {
    this.industryTeamHours = hours;
    this.calculateTotalHours();
  }

  showModal() {
    this.staticModal.show();
  }

  hideModal() {
    this.staticModal.hide();
  }

  ignoreChanges() {
    this.isDirty = false;
    this.hideModal();
    this.resetData();
    this.toggleDestination(this.destinationValue);
  }

  confirmModalSave() {
    this.onSave();
    this.hideModal();
    this.toggleDestination(this.destinationValue);
  }

  onSave() {
    this.updateHours();
  }

  showSuccessUpdate() {
    this.toastrService.success('', 'Hours were updated successfully!');
  }

  showFailedUpdate() {
    this.toastrService.error('', 'There was a problem updating your hours data, please try again. If issue persists, please contact the Help Desk');
  }

  updateHours() {
    this.hoursService.updateHours(this.hoursToEdit)
      .subscribe(data => {
        this.showSuccessUpdate();
        this.isDirty = false;
        this.resetDirtyFlags(this.hours.ServiceLines);
        this.resetDirtyFlags(this.hours.IndustryTeams);
        this.resetDirtyFlags(this.hours.NonChargeList);
      }, error => {
        this.showFailedUpdate();
        console.log(error);
      });
  }

  resetDirtyFlags(items: Item[]) {
    for (let index = 0; index < items.length; index++) {
      if (items[index].IsDirty === true) {
        items[index].IsDirty = false;
      }
    }
  }

  resetData() {
    this.hoursToEdit = _.cloneDeep(this.hours);
    this.calculateTotalHours();
  }
}
