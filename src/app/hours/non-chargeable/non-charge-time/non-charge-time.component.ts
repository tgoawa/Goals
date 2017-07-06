import { Component, OnInit, Input } from '@angular/core';
import { NonChargeItem } from '../../models/hours';

@Component({
  selector: 'app-non-charge-time',
  templateUrl: './non-charge-time.component.html',
  styleUrls: ['./non-charge-time.component.scss']
})
export class NonChargeTimeComponent implements OnInit {
  @Input('data') data: NonChargeItem[];

  currentYearTotalHours: number;
  nextYearTotalHours: number;

  constructor() { }

  ngOnInit() {
    this.calculateCurrentTotalHours();
  }

  calculateCurrentTotalHours() {
    for (let index = 0; index < this.data.length; index ++) {
      this.currentYearTotalHours = this.currentYearTotalHours + this.data[index].PrevHours;
    }
  }

  calculateNextTotalHours(hours: number) {
    this.nextYearTotalHours = this.nextYearTotalHours + hours;
  }

}
