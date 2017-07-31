import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

import { HoursService } from '../services/hours.service';
import { TeamMember, TeamMemberService } from '../../teamMember/';
import { Hours, CategoryWrapper, Item } from '../models/hours';

@Component({
  selector: 'app-hours-entry',
  templateUrl: './hours-entry.component.html',
  styleUrls: ['./hours-entry.component.scss']
})
export class HoursEntryComponent implements OnInit {
  @ViewChild('staticModal') public staticModal: ModalDirective;

  hours: Hours;
  categories: CategoryWrapper;
  isLoading = false;
  isDirty = false;
  teamMember: TeamMember;
  totalWorkHours: number;

  constructor(private hoursService: HoursService, private tmService: TeamMemberService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.teamMember = this.tmService.teamMember;
    this.getData();
  }

  canDeactivate() {
    if (this.isDirty) {
     this.showModal();
      return false;
    }
    return true;
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
        console.log(data);
        this.hours = data;
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

  showModal() {
    this.staticModal.show();
  }

  hideModal() {
    this.staticModal.hide();
  }

  hideConfirmModal() {
    this.isDirty = false;
    this.hideModal();
  }

  confirmModalSave() {
    this.onSave();
    this.hideModal();
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
    this.hoursService.updateHours(this.hours)
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
}
