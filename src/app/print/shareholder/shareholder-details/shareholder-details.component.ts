import { Component, OnInit, Input } from '@angular/core';

import { Detail } from '../../../goals/shareholder-economic/model/detail';

@Component({
  selector: 'app-shareholder-details',
  templateUrl: './shareholder-details.component.html',
  styleUrls: ['./shareholder-details.component.scss']
})
export class ShareholderDetailsComponent implements OnInit {
  @Input('title') title: string;
  @Input('currentDetail') currentDetail: Detail;
  @Input('previousDetail') previousDetail: Detail;
  constructor() { }

  ngOnInit() {
  }

}
