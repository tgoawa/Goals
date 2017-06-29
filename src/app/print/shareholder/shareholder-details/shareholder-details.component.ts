import { Component, OnInit, Input } from '@angular/core';

import { Detail } from '../../../meetings/shareholder/models/shmeeting';

@Component({
  selector: 'app-shareholder-details',
  templateUrl: './shareholder-details.component.html',
  styleUrls: ['./shareholder-details.component.scss']
})
export class ShareholderDetailsComponent implements OnInit {
  @Input('detail') detail: Detail;
  constructor() { }

  ngOnInit() {
  }

}
