import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NonChargeItem } from '../../models/hours';

@Component({
  selector: 'app-non-charge-time-item',
  templateUrl: './non-charge-time-item.component.html',
  styleUrls: ['./non-charge-time-item.component.scss']
})
export class NonChargeTimeItemComponent implements OnInit {
  @Input('data') data: NonChargeItem;
  @Input('currentYearHours') currentYearHours: number;
  @Input('nextYearHours') nextYearHours: number;
  @Output() hours: EventEmitter<number> = new EventEmitter<number>();

  currentPercentage: number;
  nextYearPercentage: number;

  constructor() { }

  ngOnInit() {
  }

  onUpdateHours() {
    this.hours.emit(this.data.NextYear);
    this.calculateNextPercentage();
  }

  calculateCurrentPercentage() {
    this.currentPercentage = this.data.PrevHours / this.currentYearHours;
  }

  calculateNextPercentage() {
    this.nextYearPercentage = this.data.NextYear / this.nextYearHours;
  }

}
