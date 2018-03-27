import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Item, Categories } from '../../models/hours';

@Component({
  selector: 'app-charge-time',
  templateUrl: './charge-time.component.html',
  styleUrls: ['./charge-time.component.scss']
})
export class ChargeTimeComponent implements OnInit, OnChanges {
  @Input('data') data: Item[];
  @Input('category') category: Categories;
  @Input('industryTeams') industryTeams: string[];
  @Output('isDirty') isDirty: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('totalNewHours') totalNewHours: EventEmitter<number> = new EventEmitter<number>();

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

  ngOnChanges() {
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

  onUpdateHours() {
    this.isDirty.emit(true);
    this.calculateNewTotalHours();
    this.calculateNewTotalPercent();

  }
  calculateNewTotalHours() {
    this.newTotalHours = 0;
    for (let index = 0; index < this.data.length; index++) {
      this.newTotalHours = this.newTotalHours + this.data[index].EstimatedHours;
    }
    this.totalNewHours.emit(this.newTotalHours);
  }

  calculateNewTotalPercent() {
    if (this.newTotalHours > 0) {
      this.newTotalPercent = this.newTotalHours / this.newTotalHours;
    } else {
      this.newTotalPercent = 0;
    }
  }
}
