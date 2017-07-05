import { Component, OnInit, Input } from '@angular/core';
import { ChargeTimeItem } from '../models/hours';

@Component({
  selector: 'app-charge-time-item',
  templateUrl: './charge-time-item.component.html',
  styleUrls: ['./charge-time-item.component.scss']
})
export class ChargeTimeItemComponent implements OnInit {
  @Input('ChargeTimeCategory') ChargeTimeCategory: ChargeTimeItem;
  @Input('TotalHours') TotalHours: number;
  constructor() { }

  ngOnInit() {
  }

}
