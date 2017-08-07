import { Component, OnInit, Input } from '@angular/core';

import { Item, Categories } from '../../../hours/models/hours';
@Component({
  selector: 'app-non-charge-time',
  templateUrl: './non-charge-time.component.html',
  styleUrls: ['./non-charge-time.component.scss']
})
export class NonChargeTimeComponent implements OnInit {
@Input('data') data: Item[];
  @Input('category') category: Categories;

  categoryName: string;
  currentYearTotalHours = 0;
  currentYearPercent = 0;
  nextYearTotalHours = 0;
  nextYearPercent = 0;

  constructor() { }

  ngOnInit() {
    this.categoryName = this.category.CategoryName;
    this.calculatePreviousTotals();
    this.calculateNewTotals();
  }

  calculatePreviousTotals() {
    this.calculatePreviousTotalHours();
    this.calculatePreviousTotalPercent();
  }

  calculatePreviousTotalHours() {
    for (let index = 0; index < this.data.length; index++) {
      this.currentYearTotalHours = this.currentYearTotalHours + this.data[index].ActualHours;
    }
  }

  calculatePreviousTotalPercent() {
    if (this.currentYearTotalHours > 0) {
      this.currentYearPercent = this.currentYearTotalHours / this.currentYearTotalHours;
    } else {
      this.currentYearPercent = 0;
    }
  }

  calculateNewTotals() {
    this.calculateNewTotalHours();
    this.calculateNewTotalPercent();
  }

  calculateNewTotalHours() {
    this.nextYearTotalHours = 0;
    for (let index = 0; index < this.data.length; index++) {
      this.nextYearTotalHours = this.nextYearTotalHours + this.data[index].EstimatedHours;
    }
  }

  calculateNewTotalPercent() {
    if (this.nextYearTotalHours > 0) {
      this.nextYearPercent = this.nextYearTotalHours / this.nextYearTotalHours;
    } else {
      this.nextYearPercent = 0;
    }
  }
}
