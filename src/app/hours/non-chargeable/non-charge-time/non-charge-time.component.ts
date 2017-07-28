import { Component, OnInit, Input } from '@angular/core';
import { NonChargeItem, Categories } from '../../models/hours';

@Component({
  selector: 'app-non-charge-time',
  templateUrl: './non-charge-time.component.html',
  styleUrls: ['./non-charge-time.component.scss']
})
export class NonChargeTimeComponent implements OnInit {
  @Input('data') data: NonChargeItem[];
  @Input('category') category: Categories;

  categoryName: string;
  currentYearTotalHours: number;
  nextYearTotalHours: number;

  constructor() { }

  ngOnInit() {
    this.categoryName = this.category.CategoryName;
    // this.calculateCurrentTotalHours();
  }

  calculateCurrentTotalHours() {
    for (let index = 0; index < this.data.length; index ++) {
      this.currentYearTotalHours = this.currentYearTotalHours + this.data[index].PreviousHours;
    }
  }

  calculateNextTotalHours(hours: number) {
    this.nextYearTotalHours = this.nextYearTotalHours + hours;
  }

}
