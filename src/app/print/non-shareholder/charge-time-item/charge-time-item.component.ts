import { Component, OnInit, Input } from '@angular/core';

import { Item, CategoryItems } from '../../../hours/models/hours';
@Component({
  selector: 'app-charge-time-item',
  templateUrl: './charge-time-item.component.html',
  styleUrls: ['./charge-time-item.component.scss']
})
export class ChargeTimeItemComponent implements OnInit {
  @Input('data') data: Item;
  @Input('categoryNames') categoryNames: CategoryItems[];
  @Input('PrevTotalHours') PrevTotalHours: number;
  @Input('CurrentTotalHours') CurrentTotalHours: number;
  @Input('NewTotalHours') NewTotalHours: number;

  currentPercentage: number;
  previousPercentage: number;
  newPercentage: number;
  itemName: string;

  constructor() { }

  ngOnInit() {
    this.setItemName();
    this.calculatePreviousPercentage();
    this.calculateNewPercentage();
    this.calculateCurrentPercentage();
  }

  setItemName() {
    for (let index = 0; index < this.categoryNames.length; index++) {
      if (this.categoryNames[index].ItemId === this.data.ItemId) {
        this.itemName = this.categoryNames[index].ItemName;
      }
    }
  }

  calculateCurrentPercentage() {
    if (this.data.CurrentYearHours > 0) {
      this.currentPercentage = this.data.CurrentYearHours / this.CurrentTotalHours
    } else {
      this.currentPercentage = 0;
    }
  }

  calculatePreviousPercentage() {
    if (this.data.PriorYearHours > 0) {
      this.previousPercentage = this.data.PriorYearHours / this.PrevTotalHours;
    } else {
      this.previousPercentage = 0;
    }
  }

  calculateNewPercentage() {
    if (this.data.EstimatedHours > 0) {
      this.newPercentage = this.data.EstimatedHours / this.NewTotalHours;
    } else {
      this.newPercentage = 0;
    }
  }

}
