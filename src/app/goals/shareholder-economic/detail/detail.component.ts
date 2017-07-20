import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Detail } from '../model/detail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input('detail') detail: Detail;
  @Input('title') title: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }


}
