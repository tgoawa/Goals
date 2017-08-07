import { Component, OnInit, Input } from '@angular/core';

import { Item, Categories } from '../../../hours/models/hours';
@Component({
  selector: 'app-charge-time',
  templateUrl: './charge-time.component.html',
  styleUrls: ['./charge-time.component.scss']
})
export class ChargeTimeComponent implements OnInit {
  @Input('data') data: Item[];
  @Input('category') category: Categories;

  categoryName: string;
  previousTotalHours = 0;
  previousTotalPercent = 0;
  newTotalHours = 0;
  newTotalPercent = 0;

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
      this.previousTotalHours = this.previousTotalHours + this.data[index].ActualHours;
    }
  }

  calculatePreviousTotalPercent() {
    if (this.previousTotalHours > 0) {
      this.previousTotalPercent = this.previousTotalHours / this.previousTotalHours;
    } else {
      this.previousTotalPercent = 0;
    }
  }

  calculateNewTotals() {
    this.calculateNewTotalHours();
    this.calculateNewTotalPercent();
  }

  calculateNewTotalHours() {
    this.newTotalHours = 0;
    for (let index = 0; index < this.data.length; index++) {
      this.newTotalHours = this.newTotalHours + this.data[index].EstimatedHours;
    }
  }

  calculateNewTotalPercent() {
    if (this.newTotalHours > 0) {
      this.newTotalPercent = this.newTotalHours / this.newTotalHours;
    } else {
      this.newTotalPercent = 0;
    }
  }

}
