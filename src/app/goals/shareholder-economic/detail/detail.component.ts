import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Detail, EconomicGoal } from '../model/detail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input('currentDetail') currentDetail: Detail;
  @Input('previousDetail') previousDetail: Detail;
  @Input('title') title: string;
  @Input('Weight') Weight: EconomicGoal;
  @Output() isDirty: EventEmitter<boolean> = new EventEmitter<boolean>();

  weightList: number[];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.weightList = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
  }

  isDirtyDetail() {
    if (this.currentDetail.IsDirty === false) {
      this.currentDetail.IsDirty = true;
      this.isDirty.emit(true);
    }
    return;
  }

  isDirtyWeight() {
    this.isDirty.emit(true);
  }

}
