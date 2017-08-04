import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Item, CategoryItems } from '../../models/hours';

@Component({
  selector: 'app-charge-time-item',
  templateUrl: './charge-time-item.component.html',
  styleUrls: ['./charge-time-item.component.scss']
})
export class ChargeTimeItemComponent implements OnInit, OnChanges {
  @Input('data') data: Item;
  @Input('categoryNames') categoryNames: CategoryItems[];
  @Input('PrevTotalHours') PrevTotalHours: number;
  @Input('CurrentTotalHours') CurrentTotalHours: number;
  @Output() hours: EventEmitter<boolean> = new EventEmitter<boolean>();

  previousPercentage: number;
  newPercentage: number;
  itemName: string;

  constructor() { }

  ngOnInit() {
    this.setItemName();
    this.calculatePreviousPercentage();
    this.calculateNewPercentage();
  }

  ngOnChanges(changes) {
    this.calculateNewPercentage();
  }

  onUpdateHours() {
    this.hours.emit(true);
    this.data.IsDirty = true;
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
