import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/hours';

@Component({
  selector: 'app-charge-time-item',
  templateUrl: './charge-time-item.component.html',
  styleUrls: ['./charge-time-item.component.scss']
})
export class ChargeTimeItemComponent implements OnInit {
  @Input('data') data: Item;
  @Input('PrevTotalHours') PrevTotalHours: number;
  @Input('CurrentTotalHours') CurrentTotalHours: number;
  @Output() hours: EventEmitter<number> = new EventEmitter<number>();

  previousPercentage: number;
  newPercentage: number;

  constructor() { }

  ngOnInit() {
    this.calculatePreviousPercentage();
  }

  onUpdateHours() {
    this.hours.emit(this.data.CurrentHours);
    this.calculateNewPercentage();
  }

  calculatePreviousPercentage() {
    this.previousPercentage = this.data.PreviousHours / this.PrevTotalHours;
  }

  calculateNewPercentage() {
    this.newPercentage = this.data.CurrentHours / this.CurrentTotalHours;
  }

}
