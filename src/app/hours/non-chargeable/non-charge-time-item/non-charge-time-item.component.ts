import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Item, CategoryItems } from '../../models/hours';

@Component({
  selector: 'app-non-charge-time-item',
  templateUrl: './non-charge-time-item.component.html',
  styleUrls: ['./non-charge-time-item.component.scss']
})
export class NonChargeTimeItemComponent implements OnInit, OnChanges {
  @Input('data') data: Item;
  @Input('categoryNames') categoryNames: CategoryItems[];
  @Input('currentYearHours') currentYearHours: number;
  @Input('priorYearHours') priorYearHours: number;
  @Input('nextYearHours') nextYearHours: number;
  @Output() hours: EventEmitter<boolean> = new EventEmitter<boolean>();

  currentYearPercentage = 0;
  priorYearPercentage = 0;
  nextYearPercentage = 0;
  itemName: string;

  constructor() { }

  ngOnInit() {
    this.setItemName();
    this.calculateCurrentYearPercentage();
    this.calculatePriorYearPercentage();
  }

  ngOnChanges() {
    this.calculateNextPercentage();
  }

  onUpdateHours() {
    this.hours.emit(true);
    this.data.IsDirty = true;
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
    for (let index = 0; index < this.categoryNames.length; index ++) {
      if (this.categoryNames[index].ItemId === this.data.ItemId) {
        this.itemName = this.categoryNames[index].ItemName;
      }
    }
  }

    setEmptyValueToZero() {
    if (this.data.EstimatedHours === null) {
      this.data.EstimatedHours = 0;
    }
  }

}
