import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

import { HoursService } from '../services/hours.service';
import { TeamMember, TeamMemberService } from '../../teamMember/';
import { Hours, CategoryWrapper, Item } from '../models/hours';

import * as _ from 'lodash';
import {
  SurveyLookups,
  SubGroupsSurveyData,
  SubGroupsInterface,
} from '../models/surveyLookups';
import { Survey } from '../models/survey';

@Component({
  selector: 'app-hours-entry',
  templateUrl: './hours-entry.component.html',
  styleUrls: ['./hours-entry.component.scss'],
})
export class HoursEntryComponent implements OnInit, OnChanges {
  @ViewChild('staticModal') public staticModal: ModalDirective;
  @ViewChild('surveyModal') surveyModal: ModalDirective;

  hours: Hours;
  hoursToEdit: Hours;
  categories: CategoryWrapper;
  destinationValue: number;
  displayNonCharge = true;
  displayIndustryTeam = false;
  displayServiceLine = false;
  industryTeams: string[];
  isLoading = false;
  isDirty = false;
  displaySubGroupInvalid = false;
  displaySurveyError = false;
  selectedSubGroupIds: number[];
  survey: Survey;
  subGroupsSurveyData: SubGroupsSurveyData[];
  surveyLookups: SurveyLookups;
  teamMember: TeamMember;
  totalWorkHours: number;

  industryTeamHours = 0;
  nonChargeTotalHours = 0;
  serviceLineTotalHours = 0;

  constructor(
    private hoursService: HoursService,
    private tmService: TeamMemberService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getEmulatedTeamMember();
    this.getSurveyLookups();
    this.survey = new Survey();
  }

  getEmulatedTeamMember() {
    this.tmService.emulatedTeamMember.subscribe(
      data => {
        this.teamMember = data;
        this.getData();
      },
      error => {
        console.log(error);
      }
    );
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
      case 1:
        this.displayNonChargeHours();
        break;
      case 2:
        this.displayIndustryTeamHours();
        break;
      case 3:
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
    this.hoursService.getHours(this.teamMember.TeamMemberId).subscribe(
      data => {
        this.isLoading = false;
        this.hours = data;
        this.hoursToEdit = _.cloneDeep(this.hours);
      },
      error => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  getNames() {
    this.isLoading = true;
    this.hoursService.getCategories().subscribe(
      data => {
        this.isLoading = false;
        this.categories = data;
      },
      error => {
        this.isLoading = false;
        console.log(error);
      }
    );
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

  showSurveyModal() {
    this.surveyModal.show();
  }

  hideSurveyModal() {
    this.surveyModal.hide();
  }

  onSubmitSurvey() {
    if (this.countSelectedSubGroups(this.subGroupsSurveyData) <= 2) {
      console.log('Count is ok, form should be ok to save');
      this.displaySubGroupInvalid = false;
      this.survey.TeamMemberId = this.teamMember.TeamMemberId;
      this.saveSurvey(this.survey);
    } else {
      console.error('Too many subgroups selected');
      this.displaySubGroupInvalid = true;
    }
  }

  saveSurvey(surveyData: Survey) {
    console.log(surveyData);
    this.hoursService.saveSurvey(surveyData).subscribe(
      data => {
        if (data) {
          this.displaySurveyError = false;
          console.log('Survey Successfully Saved!');
          this.hideSurveyModal();
          this.teamMember.IsSurveyTaken = true;
        } else {
          console.error('There was a database issue saving the survey!');
          this.displaySurveyError = true;
        }
      }, error => {
        console.error(error);
      }
    )
  }

  showSuccessUpdate() {
    this.toastrService.success('', 'Hours were updated successfully!');
  }

  showFailedUpdate() {
    this.toastrService.error(
      '',
      'Error updating your hours data, please try again. If issue persists, please contact the Help Desk'
    );
  }

  updateHours() {
    this.hoursService.updateHours(this.hoursToEdit).subscribe(
      data => {
        this.showSuccessUpdate();
        this.isDirty = false;
        this.resetDirtyFlags(this.hours.ServiceLines);
        this.resetDirtyFlags(this.hours.IndustryTeams);
        this.resetDirtyFlags(this.hours.NonChargeList);
        location.reload();
      },
      error => {
        this.showFailedUpdate();
        console.log(error);
      }
    );
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

  private createSubGroupsData(list: SubGroupsInterface[]) {
    this.subGroupsSurveyData = [];
    for (let x = 0; x < list.length; x++) {
      this.subGroupsSurveyData.push(
        new SubGroupsSurveyData(
          list[x].ServiceLineId,
          list[x].ServiceLineSubGroupId,
          list[x].SubGroup
        )
      );
    }
  }

  private getSurveyLookups() {
    if (this.isDisplaySurvey()) {
      this.hoursService.getSurveyLookups().subscribe(
        data => {
          this.surveyLookups = data;
          this.createSubGroupsData(this.surveyLookups.SubGroups);
          this.showSurveyModal();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  private assignSelectedSubGroups(selectedIds: number[]) {
    if (selectedIds.length > 0) {
      this.survey.SubGroupsExpertise = _.cloneDeep(selectedIds);
    }
  }

  private countSelectedSubGroups(list: SubGroupsSurveyData[]) {
    let count = 0;
    this.selectedSubGroupIds = [];
      for (let x = 0; x < list.length; x++) {
        if (list[x].IsSelected) {
          count++;
          this.selectedSubGroupIds.push(list[x].ServiceLineSubGroupId);
        }
      }
      this.assignSelectedSubGroups(this.selectedSubGroupIds);
      return count;
  }

  private isDisplaySurvey() {
    if (!this.teamMember.IsChargable) {
      return false;
    }
    if (this.teamMember.IsSurveyTaken) {
      return false;
    } else {
      return true;
    }
  }
}
