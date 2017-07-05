import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChargeTimeItem } from '../models/hours';

@Component({
  selector: 'app-charge-time-item',
  templateUrl: './charge-time-item.component.html',
  styleUrls: ['./charge-time-item.component.scss']
})
export class ChargeTimeItemComponent implements OnInit {
  @Input('ChargeTimeCategory') ChargeTimeCategory: ChargeTimeItem;
  @Input('PrevTotalHours') PrevTotalHours: number;
  @Input('CurrentTotalHours') CurrentTotalHours: number;
  @Output() hours: EventEmitter<number> = new EventEmitter<number>();

  previousPercentage: number;
  newPercentage: number;

  constructor() { }

  ngOnInit() {
  }

  calculatePreviousPercentage() {
    return this.ChargeTimeCategory.PrevHours / this.PrevTotalHours;
  }

  calculateNewPercentage() {
    this.newPercentage = this.ChargeTimeCategory.NextYear / this.CurrentTotalHours;
  }

}
