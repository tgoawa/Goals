import { Component, OnInit, Input } from '@angular/core';
import { ChargeTimeItem } from '../../models/hours';

@Component({
  selector: 'app-charge-time',
  templateUrl: './charge-time.component.html',
  styleUrls: ['./charge-time.component.scss']
})
export class ChargeTimeComponent implements OnInit {
  @Input('data') data: ChargeTimeItem[];
  @Input('categoryName') categoryName: string;

  previousTotalHours: number;
  previousTotalPercent: number;
  newTotalHours: number;
  newTotalPercent: number;

  constructor() { }

  ngOnInit() {
    this.calculatePreviousTotalHours();
    this.calculatePreviousTotalPercent();
  }

  calculatePreviousTotalHours() {
    for (let index = 0; index < this.data.length; index ++) {
      this.previousTotalHours = this.previousTotalHours + this.data[index].PrevHours;
    }
  }

  calculatePreviousTotalPercent() {
    this.previousTotalPercent = this.previousTotalHours / this.previousTotalHours;
  }

  onUpdateHours(hours: number) {
    this.calculateNewTotalHours(hours);
    this.calculateNewTotalPercent();

  }
  calculateNewTotalHours(hours: number) {
    this.newTotalHours = this.newTotalHours + hours;
  }

  calculateNewTotalPercent() {
    this.newTotalPercent = this.newTotalHours / this.newTotalHours;
  }
}
