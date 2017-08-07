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

  previousPercentage: number;
  newPercentage: number;
  itemName: string;

  constructor() { }

  ngOnInit() {
    this.setItemName();
    this.calculatePreviousPercentage();
    this.calculateNewPercentage();
  }

  setItemName() {
    for (let index = 0; index < this.categoryNames.length; index++) {
      if (this.categoryNames[index].ItemId === this.data.ItemId) {
        this.itemName = this.categoryNames[index].ItemName;
      }
    }
  }

  calculatePreviousPercentage() {
    if (this.data.ActualHours > 0) {
      this.previousPercentage = this.data.ActualHours / this.PrevTotalHours;
    } else {
      this.previousPercentage = 0;
    }
  }

  calculateNewPercentage() {
    if (this.data.EstimatedHours > 0) {
      this.newPercentage = this.data.EstimatedHours / this.CurrentTotalHours;
    } else {
      this.newPercentage = 0;
    }
  }

}
