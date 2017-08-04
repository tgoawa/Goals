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
  @Input('nextYearHours') nextYearHours: number;
  @Output() hours: EventEmitter<boolean> = new EventEmitter<boolean>();

  currentPercentage = 0;
  nextYearPercentage = 0;
  itemName: string;

  constructor() { }

  ngOnInit() {
    this.setItemName();
    this.calculateCurrentPercentage();
  }

  ngOnChanges() {
    this.calculateNextPercentage();
  }

  onUpdateHours() {
    this.hours.emit(true);
    this.data.IsDirty = true;
  }

  calculateCurrentPercentage() {
    if (this.data.ActualHours > 0) {
      this.currentPercentage = this.data.ActualHours / this.currentYearHours;
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
