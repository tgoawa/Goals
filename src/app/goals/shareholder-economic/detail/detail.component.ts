import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Detail } from '../model/detail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input('currentDetail') currentDetail: Detail;
  @Input('previousDetail') previousDetail: Detail;
  @Input('title') title: string;
  @Output() isDirty: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  isDirtyDetail() {
    if (this.currentDetail.IsDirty = false) {
      this.currentDetail.IsDirty = true;
      this.isDirty.emit(true);
    }
    return;
  }
}
