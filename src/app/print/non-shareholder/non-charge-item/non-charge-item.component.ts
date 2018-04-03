import { Component, OnInit, Input } from '@angular/core';
import { Item, CategoryItems } from '../../../hours/models/hours';
@Component({
  selector: 'app-non-charge-item',
  templateUrl: './non-charge-item.component.html',
  styleUrls: ['./non-charge-item.component.scss']
})
export class NonChargeItemComponent implements OnInit {
  @Input('data') data: Item;
  @Input('categoryNames') categoryNames: CategoryItems[];
  @Input('currentYearHours') currentYearHours: number;
  @Input('nextYearHours') nextYearHours: number;

  currentPercentage = 0;
  nextYearPercentage = 0;
  itemName: string;

  constructor() { }

  ngOnInit() {
    this.setItemName();
    this.calculateCurrentPercentage();
    this.calculateNextPercentage();
  }

  calculateCurrentPercentage() {
    if (this.data.PriorYearHours > 0) {
      this.currentPercentage = this.data.PriorYearHours / this.currentYearHours;
    } else {
      this.currentPercentage = 0;
    }
  }

  calculateNextPercentage() {
    if (this.data.EstimatedHours > 0) {
      this.nextYearPercentage = this.data.EstimatedHours / this.nextYearHours;
    } else {
      this.nextYearPercentage = 0;
    }
  }

  setItemName() {
    for (let index = 0; index < this.categoryNames.length; index++) {
      if (this.categoryNames[index].ItemId === this.data.ItemId) {
        this.itemName = this.categoryNames[index].ItemName;
      }
    }
  }

}
