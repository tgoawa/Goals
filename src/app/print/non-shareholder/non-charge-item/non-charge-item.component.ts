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
  @Input('priorYearHours') priorYearHours: number;
  @Input('nextYearHours') nextYearHours: number;

  currentYearPercentage = 0;
  priorYearPercentage = 0;
  nextYearPercentage = 0;
  itemName: string;

  constructor() { }

  ngOnInit() {
    this.setItemName();
    this.calculateCurrentYearPercentage();
    this.calculatePriorYearPercentage();
    this.calculateNextPercentage();
  }

  calculateCurrentYearPercentage() {
    if (this.data.CurrentYearHours > 0) {
      this.currentYearPercentage = this.data.CurrentYearHours / this.currentYearHours;
    } else {
      this.currentYearPercentage = 0;
    }
  }

  calculatePriorYearPercentage() {
    if (this.data.PriorYearHours > 0) {
      this.priorYearPercentage = this.data.PriorYearHours / this.priorYearHours;
    } else {
      this.priorYearPercentage = 0;
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
